// server.js
const express = require("express");
const axios = require("axios");
require("dotenv").config();
const cors = require("cors");

const app = express();

// ✅ Allow specific frontend origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://tyrepro.ca/",
  "https://tyrepro.netlify.app/"
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

/**
 * GET /api/tires
 * Fetch and merge product + inventory data
 */
app.get("/api/tires", async (req, res) => {
  try {
    // 1️⃣ Fetch product data
    const systemResp = await axios.get(
      `${process.env.DISTRIBUTOR_BASE_URL}/product/all`,
      {
        headers: {
          Authorization: `ApiKey ${process.env.DISTRIBUTOR_API_KEY}`,
        },
      }
    );
    const systemData = systemResp.data;

    // 2️⃣ Fetch inventory data
    const inventoryResp = await axios.get(
      `${process.env.DISTRIBUTOR_BASE_URL}/inventory/all`,
      {
        headers: {
          Authorization: `ApiKey ${process.env.DISTRIBUTOR_API_KEY}`,
        },
      }
    );
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

    // 💰 Price adjustment function
    function adjustPrice(basePrice, sizeStr, brand) {
      if (basePrice === "N/A") {
        return basePrice;
      }

      const firstThree = parseInt(sizeStr.slice(0, 3));
      const middleTwo = parseInt(sizeStr.slice(3, 5));
      const lastTwo = parseInt(sizeStr.slice(5));

      let price = basePrice + 50;

      // Brand-based adjustments
      brand = brand?.toLowerCase() || "";
      const premiumXBrands = [
        "pirelli",
        "bfgoodrich",
        "toyo",
        "continental",
        "michelin",
        "bridgestone",
        "yokohama",
      ];
      const premiumBrands = [
        "firestone",
        "fuzion",
        "general",
        "hankook",
        "kumho",
        "laufenn",
        "nexen",
        "uniroyal",
      ];

      if (brand && premiumXBrands.includes(brand)) {
        price += 25;
      }
      if (brand && premiumBrands.includes(brand)) {
        price += 12.5;
      }

      return Math.round(price * 100) / 100;
    }

    // 4️⃣ Merge system + inventory data
    const merged = systemData
      .filter((p) => p.type === "Tire")
      .map((p) => {
        const inv = inventoryMap[p.itemNumber];
        if (!inv) return null;

        const size = p.specifications?.size || null;

        // ✅ Only allow valid size (starts with 7 digits before comma)
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
      .filter(Boolean); // remove nulls

    // ✅ Return response
    res.json(merged);
  } catch (error) {
    console.error("Error in /api/tires:", error.message);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
