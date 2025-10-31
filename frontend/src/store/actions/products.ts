// store/actions/products.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Product } from "@/store/reducers/products";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "https://tyrepro.onrender.com";

export type FetchProductsArgs = {
  page?: number;
  limit?: number;
  search?: string;
  brand?: string;
  inStock?: boolean;
};

export type FetchProductsResult = {
  items: Product[];
  total?: number;
  page?: number;
  limit?: number;
};

type UnknownRecord = Record<string, unknown>;

const asRecord = (v: unknown): UnknownRecord => (v && typeof v === "object" ? (v as UnknownRecord) : {});

const getString = (rec: UnknownRecord, ...keys: string[]) => {
  for (const k of keys) {
    const v = rec[k];
    if (v !== undefined && v !== null) return String(v);
  }
  return "";
};

// const getNumber = (rec: UnknownRecord, key: string, fallback = 0) => {
//   const v = rec[key];
//   if (typeof v === "number" && Number.isFinite(v)) return v;
//   if (typeof v === "string" && v.trim() !== "") {
//     const n = Number(v);
//     return Number.isFinite(n) ? n : fallback;
//   }
//   return fallback;
//   };

// const getBoolean = (rec: UnknownRecord, key: string) => {
//   const v = rec[key];
//   if (typeof v === "boolean") return v;
//   if (typeof v === "number") return v !== 0;
//   if (typeof v === "string") {
//     const s = v.toLowerCase().trim();
//     return s === "true" || s === "1";
//   }
//   return undefined;
// };

export const fetchProducts = createAsyncThunk<
  FetchProductsResult,
  FetchProductsArgs | undefined,
  { rejectValue: string }
>("products/fetchAll", async (opts = {}, thunkAPI) => {
  try {
    const { page = 1, limit = 9006, search, brand, inStock } = opts;
    const params = new URLSearchParams();
    params.set("page", String(page));
    params.set("limit", String(limit));
    if (search) params.set("search", search);
    if (brand) params.set("brand", brand);
    if (inStock !== undefined) params.set("inStock", String(inStock));

    const url = `${API_BASE}/api/tires?${params.toString()}`;

    const res = await fetch(url, { signal: thunkAPI.signal });

    if (!res.ok) {
      const text = await res.text().catch(() => res.statusText || "Unknown error");
      return thunkAPI.rejectWithValue(`Fetch failed: ${res.status} ${text}`);
    }

    const data: unknown = await res.json();

    // normalize two common server response shapes:
    // 1) { items: Product[], total: number, page, limit }
    // 2) Product[] (array)
    let itemsRaw: unknown[] = [];
    let total: number | undefined;

    if (Array.isArray(data)) {
      itemsRaw = data;
    } else if (data && typeof data === "object") {
      // try to extract items field
      const anyData = asRecord(data);
      if (Array.isArray(anyData.items)) {
        itemsRaw = anyData.items as unknown[];
        total = typeof anyData.total === "number" ? anyData.total : undefined;
      } else {
        // unknown object shape — attempt to find array values
        const possible = Object.values(anyData).find((v) => Array.isArray(v));
        if (Array.isArray(possible)) {
          itemsRaw = possible as unknown[];
        } else {
          itemsRaw = [];
        }
      }
    }

    // normalize each item to Product shape (defensive)
    const items: Product[] = itemsRaw.map((p: unknown) => {
      const rec = asRecord(p);

      const itemNumber = getString(rec, "itemNumber", "id", "_id");
      const type = getString(rec, "type", "model", "name");
      const brand = getString(rec, "brand", "make", "manufacturer");
      const size = getString(rec, "size", "dimensions");
      const productImgURLRaw = getString(rec, "productImgURL", "image", "img", "photo");
      const basePriceRaw = rec.basePrice ?? rec.base_price ?? rec.priceBase;
      const priceRaw = rec.price ?? rec.cost ?? rec.amount;
      const qtyRaw = rec.qtyAvailable ?? rec.qty_available ?? rec.quantity ?? rec.stock;
      const inStockRaw = rec.inStock ?? rec.in_stock ?? rec.available;

      const productImgURL = productImgURLRaw ? String(productImgURLRaw) : null;
      const basePrice = basePriceRaw != null ? Number(basePriceRaw) : undefined;
      const price = priceRaw != null ? Number(priceRaw) : 0;
      const qtyAvailable =
        typeof qtyRaw === "number" ? qtyRaw : Number(qtyRaw ?? 0);
      const inStock =
        typeof inStockRaw !== "undefined"
          ? Boolean(inStockRaw)
          : typeof qtyAvailable === "number"
          ? qtyAvailable > 0
          : undefined;

      return {
        itemNumber: String(itemNumber),
        type: String(type),
        brand: String(brand),
        size: String(size),
        productImgURL: productImgURL ?? null,
        basePrice: Number.isFinite(basePrice as number) ? basePrice : undefined,
        price: Number.isFinite(price) ? price : 0,
        qtyAvailable: Number.isFinite(qtyAvailable) ? qtyAvailable : Number(qtyAvailable ?? 0),
        inStock,
      } as Product;
    });

    return {
      items,
      total,
      page,
      limit,
    } as FetchProductsResult;
  } catch (err) {
    if (err instanceof Error) return thunkAPI.rejectWithValue(err.message);
    return thunkAPI.rejectWithValue("Network error");
  }
});




// // store/actions/products.ts
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import type { Product } from "@/store/reducers/products";

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "https://tyrepro.onrender.com";

// export type FetchProductsArgs = {
//   page?: number;
//   limit?: number;
//   search?: string;
//   brand?: string;
//   inStock?: boolean;
// };

// export type FetchProductsResult = {
//   items: Product[];
//   total?: number; // optional if API provides a total count
//   page?: number;
//   limit?: number;
// };

// export const fetchProducts = createAsyncThunk<
//   FetchProductsResult, // return type
//   FetchProductsArgs | undefined, // arg type
//   { rejectValue: string }
// >("products/fetchAll", async (opts = {}, thunkAPI) => {
//   try {
//     const { page = 1, limit = 20, search, brand, inStock } = opts;
//     const params = new URLSearchParams();
//     params.set("page", String(page));
//     params.set("limit", String(limit));
//     if (search) params.set("search", search);
//     if (brand) params.set("brand", brand);
//     if (inStock !== undefined) params.set("inStock", String(inStock));

//     const url = `${API_BASE}/api/tires?${params.toString()}`;

//     const res = await fetch(url, { signal: thunkAPI.signal });

//     if (!res.ok) {
//       const text = await res.text().catch(() => res.statusText || "Unknown error");
//       return thunkAPI.rejectWithValue(`Fetch failed: ${res.status} ${text}`);
//     }

//     const data: unknown = await res.json();

//     // normalize two common server response shapes:
//     // 1) { items: Product[], total: number, page, limit }
//     // 2) Product[] (array)
//     let itemsRaw: unknown[] = [];
//     let total: number | undefined;

//     if (Array.isArray(data)) {
//       itemsRaw = data;
//     } else if (data && typeof data === "object") {
//       // try to extract items field
//       const anyData = data as any;
//       if (Array.isArray(anyData.items)) {
//         itemsRaw = anyData.items;
//         total = typeof anyData.total === "number" ? anyData.total : undefined;
//       } else {
//         // unknown object shape — attempt to find array values
//         // fallback: try keys that might contain array
//         const possible = Object.values(anyData).find((v) => Array.isArray(v));
//         if (Array.isArray(possible)) {
//           itemsRaw = possible as unknown[];
//         } else {
//           itemsRaw = [];
//         }
//       }
//     }

//     // normalize each item to Product shape (defensive)
//     const items: Product[] = itemsRaw.map((p: any) => ({
//       itemNumber: String(p.itemNumber ?? p.id ?? ""),
//       type: String(p.type ?? ""),
//       brand: String(p.brand ?? ""),
//       size: String(p.size ?? ""),
//       productImgURL: p.productImgURL ? String(p.productImgURL) : null,
//       basePrice: p.basePrice != null ? Number(p.basePrice) : undefined,
//       price: p.price != null ? Number(p.price) : 0,
//       qtyAvailable: typeof p.qtyAvailable === "number" ? p.qtyAvailable : Number(p.qtyAvailable ?? 0),
//       inStock: p.inStock !== undefined ? Boolean(p.inStock) : (p.qtyAvailable !== undefined ? Number(p.qtyAvailable) > 0 : undefined),
//     }));

//     return {
//       items,
//       total,
//       page,
//       limit,
//     } as FetchProductsResult;
//   } catch (err) {
//     if (err instanceof Error) return thunkAPI.rejectWithValue(err.message);
//     return thunkAPI.rejectWithValue("Network error");
//   }
// });
