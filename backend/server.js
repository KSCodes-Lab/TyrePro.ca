// server.js
const express = require("express");
const axios = require("axios");
require("dotenv").config();
const cors = require("cors");

const app = express();

// ✅ CORS setup
const allowedOrigins = [
  "http://localhost:3000",
  "https://tyrepro.ca"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

// ✅ GET /api/tires with pagination
app.get("/api/tires", async (req, res) => {
  try {
    // Read pagination params
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 30;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    // 1️⃣ Fetch system products
    const systemResp = await axios.get(`${process.env.DISTRIBUTOR_BASE_URL}/product/all`, {
      headers: {
        Authorization: `ApiKey${process.env.DISTRIBUTOR_API_KEY}`,
      },
    });
    const systemData = systemResp.data;

    // 2️⃣ Fetch inventory
    const inventoryResp = await axios.get(`${process.env.DISTRIBUTOR_BASE_URL}/inventory/all`, {
      headers: {
        Authorization: `ApiKey${process.env.DISTRIBUTOR_API_KEY}`,
      },
    });
    const inventoryData = inventoryResp.data;

    // 3️⃣ Build inventory lookup (itemNumber → { price, qtyAvailable })
    const inventoryMap = {};
    inventoryData.forEach((item) => {
      if (!item.locations || item.locations.length === 0) return;

      const totalQty = item.locations.reduce((sum, loc) => {
        return sum + (loc.qtyAvailable || 0);
      }, 0);

      if (totalQty === 0) return;

      inventoryMap[item.itemNumber] = {
        price: item.pricing?.price || "N/A",
        qtyAvailable: totalQty,
      };
    });

    // 🧮 Price adjustment logic
    function adjustPrice(basePrice, sizeStr, brand) {
      if (basePrice === "N/A") return basePrice;

      const firstThree = parseInt(sizeStr.slice(0, 3));
      const middleTwo = parseInt(sizeStr.slice(3, 5));
      const lastTwo = parseInt(sizeStr.slice(5));
      let price = basePrice + 50;

      brand = brand.toLowerCase();
      const premiumXBrands = ["pirelli", "bfgoodrich", "toyo", "continental", "michelin", "bridgestone", "yokohama"];
      const premiumBrands = ["firestone", "fuzion", "general", "hankook", "kumho", "laufenn", "nexen", "uniroyal"];

      if (brand && premiumXBrands.includes(brand)) price += 25;
      if (brand && premiumBrands.includes(brand)) price += 12.5;

      return Math.round(price * 100) / 100;
    }

    // 4️⃣ Merge data
    const merged = systemData
      .filter((p) => p.type === "Tire")
      .map((p) => {
        const inv = inventoryMap[p.itemNumber];
        if (!inv) return null;

        const size = p.specifications?.size || null;
        const isValidSize = size && /^\d{7},/.test(size);
        if (!isValidSize) return null;

        const sizeForPrice = size.split(",")[0];

        return {
          itemNumber: p.itemNumber,
          type: p.type,
          brand: p.brandName || null,
          size: size,
          productImgURL: p.productImageUrl || null,
          basePrice: inv.price || "N/A",
          price: adjustPrice(inv.price || "N/A", sizeForPrice, p.brandName),
          qtyAvailable: inv.qtyAvailable || 0,
        };
      })
      .filter(Boolean);

    // 5️⃣ Apply pagination
    const paginatedData = merged.slice(startIndex, endIndex);

    // 6️⃣ Send paginated response
    res.json({
      page,
      limit,
      totalItems: merged.length,
      totalPages: Math.ceil(merged.length / limit),
      data: paginatedData,
    });
  } catch (error) {
    console.error("Error in /api/tires:", error.message);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
