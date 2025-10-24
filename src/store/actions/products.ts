// export const fetchProducts = createAsyncThunk("fetchData", async () => {
//     // console.log("action");
//   const response = await fetch("https://tyrepro.onrender.com/api/tires");
//   return response.json();
// });

// store/actions/products.ts
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import type { Product } from "@/store/reducers/products";

// // set return type to Product[]
// export const fetchProducts = createAsyncThunk<
//   Product[], // return type
//   void,      // arg type
//   { rejectValue: string }
// >("products/fetchAll", async (_, thunkAPI) => {
//   try {
//     const res = await fetch("https://tyrepro.onrender.com/api/tires");
//     if (!res.ok) {
//       const text = await res.text();
//       return thunkAPI.rejectWithValue(`Fetch failed: ${res.status} ${text}`);
//     }
//     const data = await res.json();

//     // Normalize: ensure productImgURL is string|null and inStock boolean
//     const normalized: Product[] = (Array.isArray(data) ? data : []).map((p: any) => ({
//       itemNumber: String(p.itemNumber ?? ""),
//       type: String(p.type ?? ""),
//       brand: String(p.brand ?? ""),
//       size: String(p.size ?? ""),
//       productImgURL: p.productImgURL ? String(p.productImgURL) : null,
//       basePrice: p.basePrice ? Number(p.basePrice) : undefined,
//       price: p.price ? Number(p.price) : 0,
//       qtyAvailable: typeof p.qtyAvailable === "number" ? p.qtyAvailable : Number(p.qtyAvailable ?? 0),
//       inStock: !!p.inStock || (p.qtyAvailable && Number(p.qtyAvailable) > 0),
//     }));

//     return normalized;
//   } catch (err: any) {
//     return thunkAPI.rejectWithValue(err?.message ?? "Network error");
//   }
// });


// store/actions/products.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Product } from "@/store/reducers/products";

export const fetchProducts = createAsyncThunk<
  Product[], // thunk return type
  void,      // thunk arg type
  { rejectValue: string }
>("products/fetchAll", async (_, thunkAPI) => {
  try {
    const res = await fetch("https://tyrepro.onrender.com/api/tires");
    if (!res.ok) {
      const text = await res.text();
      return thunkAPI.rejectWithValue(`Fetch failed: ${res.status} ${text}`);
    }

    const data: unknown = await res.json();

    const normalized: Product[] = (Array.isArray(data) ? data : []).map(
      (p: Partial<Product>) => {
        // normalize numeric-ish fields safely
        const qtyAvailable =
          typeof p.qtyAvailable === "number"
            ? p.qtyAvailable
            : Number(p.qtyAvailable ?? 0);

        // Determine inStock while preserving `undefined` if source had neither field
        let inStock: boolean | undefined;
        if (p.inStock !== undefined) {
          // if API explicitly provides inStock, coerce to boolean
          inStock = Boolean(p.inStock);
        } else if (p.qtyAvailable !== undefined) {
          // if API provides qtyAvailable (even as 0), derive inStock from it
          inStock = Number(p.qtyAvailable) > 0;
        } else {
          // neither field present -> keep undefined
          inStock = undefined;
        }

        return {
          itemNumber: String(p.itemNumber ?? ""),
          type: String(p.type ?? ""),
          brand: String(p.brand ?? ""),
          size: String(p.size ?? ""),
          productImgURL: p.productImgURL ? String(p.productImgURL) : null,
          basePrice: p.basePrice != null ? Number(p.basePrice) : undefined,
          price: p.price != null ? Number(p.price) : 0,
          qtyAvailable,
          inStock,
        } as Product;
      }
    );

    return normalized;
  } catch (err) {
    if (err instanceof Error) {
      return thunkAPI.rejectWithValue(err.message);
    }
    return thunkAPI.rejectWithValue("Network error");
  }
});

