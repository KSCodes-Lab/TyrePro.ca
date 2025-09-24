// server.js
const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.get("/api/tires", async (req, res) => {
  try {
    // 1. Fetch system products
    const systemResp = await axios.get(`${process.env.DISTRIBUTOR_BASE_URL}/product/all`, {
      headers: {
        Authorization: `ApiKey${process.env.DISTRIBUTOR_API_KEY}`,
      },
    });
    const systemData = systemResp.data;

    // 2. Fetch inventory
    const inventoryResp = await axios.get(`${process.env.DISTRIBUTOR_BASE_URL}/inventory/all`, {
      headers: {
        Authorization: `ApiKey${process.env.DISTRIBUTOR_API_KEY}`,
      },
    });
    const inventoryData = inventoryResp.data;

    // 3. Build inventory lookup (itemNumber → { price, qtyAvailable })
    const inventoryMap = {};
    inventoryData.forEach((item) => {
      if (!item.locations || item.locations.length === 0) return; // skip if no locations

      const totalQty = item.locations.reduce((sum, loc) => {
        return sum + (loc.qtyAvailable || 0);
      }, 0);

      if (totalQty === 0) return; // skip if no stock

      inventoryMap[item.itemNumber] = {
        price: item.pricing?.price || "N/A",
        qtyAvailable: totalQty,
      };
    });

    function adjustPrice(basePrice, sizeStr, brand) {

        if (basePrice === "N/A") {
            return basePrice
        }

        const firstThree = parseInt(sizeStr.slice(0, 3));
        const middleTwo = parseInt(sizeStr.slice(3, 5));
        const lastTwo = parseInt(sizeStr.slice(5));
        let price = basePrice + 50;

        // Size adjustments...
       /* if (firstThree > 254) price += 12.5;
        if (middleTwo < 41 && lastTwo > 17) price += 12.5;

        if (lastTwo < 17) price += 12.5;
        else if (lastTwo === 17) price += 15;
        else if ([18, 19].includes(lastTwo)) price += 17.5;
        else if (lastTwo > 19) price += 20;*/

        // Brand adjustments
        const premiumXBrands = ["Pirelli", 'BFGoodrich', 'Toyo', 'Continental', 'Michelin', 'Bridgeston', 'Yokohama'];
        if (brand && premiumXBrands.includes(brand)) {
            price += 25;
        }

      const premiumBrands = ['Firestone', 'Fuzion', 'General', 'Hankook', 'Kumho', 'Laufenn', 'Nexen', 'Uniroyal'];
        if (brand && premiumBrands.includes(brand)) {
            price += 12.5;
        }

        return Math.round(price*100)/100;
    }


    // Merge system data with inventory
    const merged = systemData
        .filter(p => p.type === "Tire")
        .map(p => {
            const inv = inventoryMap[p.itemNumber];
            if (!inv) return null;

            // Extract size from system data
            const size = p.specifications?.size || null;

            // ✅ Check if size is valid (starts with 7 digits before the comma)
            const isValidSize = size && /^\d{7},/.test(size);

            if (!isValidSize) {
            return null; // skip invalid sizes
            }

            const sizeForPrice = size.split(',')[0];

        return {
            itemNumber: p.itemNumber,
            type: p.type,
            brand: p.brandName || null,
            size: size,
            productImgURL: p.productImageUrl || null,
            basePrice: inv.price || "N/A",
            price: adjustPrice(inv.price || "N/A", sizeForPrice, p.brand), 
            qtyAvailable: inv.qtyAvailable || 0
        };
      })
      .filter(Boolean); // remove nulls

    res.json(merged);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
