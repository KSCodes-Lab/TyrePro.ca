app.get("/api/tires", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;      // Default: page 1
    const limit = parseInt(req.query.limit) || 30;   // Default: 30 results per page
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

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

    // 3. Build inventory lookup
    const inventoryMap = {};
    inventoryData.forEach((item) => {
      if (!item.locations || item.locations.length === 0) return;

      const totalQty = item.locations.reduce((sum, loc) => sum + (loc.qtyAvailable || 0), 0);
      if (totalQty === 0) return;

      inventoryMap[item.itemNumber] = {
        price: item.pricing?.price || "N/A",
        qtyAvailable: totalQty,
      };
    });

    function adjustPrice(basePrice, sizeStr, brand) {
      if (basePrice === "N/A") return basePrice;

      let price = basePrice + 50;
      brand = brand.toLowerCase();

      const premiumXBrands = ["pirelli", "bfgoodrich", "toyo", "continental", "michelin", "bridgestone", "yokohama"];
      const premiumBrands = ["firestone", "fuzion", "general", "hankook", "kumho", "laufenn", "nexen", "uniroyal"];

      if (brand && premiumXBrands.includes(brand)) price += 25;
      if (brand && premiumBrands.includes(brand)) price += 12.5;

      return Math.round(price * 100) / 100;
    }

    // 4. Merge system data with inventory
    const merged = systemData
      .filter(p => p.type === "Tire")
      .map(p => {
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
          size,
          productImgURL: p.productImageUrl || null,
          basePrice: inv.price || "N/A",
          price: adjustPrice(inv.price || "N/A", sizeForPrice, p.brandName),
          qtyAvailable: inv.qtyAvailable || 0,
        };
      })
      .filter(Boolean);

    // 5. Apply pagination AFTER merging
    const paginatedResults = merged.slice(startIndex, endIndex);

    res.json({
      totalItems: merged.length,
      totalPages: Math.ceil(merged.length / limit),
      currentPage: page,
      itemsPerPage: limit,
      data: paginatedResults,
    });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});
