// store/reducers/products.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "@/store/actions/products";

export type Product = {
  itemNumber: string;
  type: string;
  brand: string;
  size: string;
  productImgURL: string | null; // normalized to string | null for UI
  basePrice?: number;
  price: number;
  qtyAvailable?: number;
  inStock?: boolean;
};

type ProductsState = {
  productList: Product[];
  loading: boolean;
  error: string | null;
  success: boolean;
  isProductList: boolean;
};

const initialState: ProductsState = {
  productList: [],
  loading: false,
  error: null,
  success: false,
  isProductList: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productListInit: (state) => {
      state.isProductList = true;
      state.success = false;
    },
    productListSuccess: (state, action: PayloadAction<Product[]>) => {
      state.productList = action.payload;
      state.success = true;
      state.isProductList = false;
    },
    productListReset: (state) => {
      state.productList = [];
      state.loading = false;
      state.error = null;
      state.success = false;
      state.isProductList = false;
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchProducts.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //     state.isProductList = true;
    //   })

     builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.productList = action.payload;
        state.success = true;
        state.isProductList = false;
      }
    );
      // builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<any>) => {
        //  console.log("reducer", action);
        
        // Try to coerce payload to Product[]
        // const payload = action.payload;
        // state.loading = false;
        // state.productList = action.payload;
        //  Array.isArray(payload) ? payload : [];
        // state.success = true;
        // state.isProductList = false;
      // })
      // .addCase(fetchProducts.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = (action.payload as string) || action.error.message || "Failed";
      //   state.isProductList = false;
      //   state.success = false;
      // });
  },
});

export const { productListInit, productListSuccess, productListReset } = productSlice.actions;
export default productSlice.reducer;