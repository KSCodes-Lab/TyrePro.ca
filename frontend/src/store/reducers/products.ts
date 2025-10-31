
// store/reducers/products.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts, FetchProductsResult } from "@/store/actions/products";

export type Product = {
  itemNumber: string;
  type: string;
  model: string;
  brand: string;
  size: string;
  productImgURL: string | null;
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
  // pagination metadata
  total?: number;
  page: number;
  limit: number;
};

const initialState: ProductsState = {
  productList: [],
  loading: false,
  error: null,
  success: false,
  isProductList: false,
  total: undefined,
  page: 1,
  limit: 20,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productListInit: (state) => {
      state.isProductList = true;
      state.success = false;
    },
    // optional manual setter if you ever want to set products locally:
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
      state.total = undefined;
      state.page = 1;
      state.limit = 20;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isProductList = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<FetchProductsResult>) => {
        state.loading = false;
        state.productList = action.payload.items;
        state.success = true;
        state.isProductList = false;
        state.total = action.payload.total;
        state.page = action.payload.page ?? state.page;
        state.limit = action.payload.limit ?? state.limit;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || action.error?.message || "Failed";
        state.isProductList = false;
        state.success = false;
      });
  },
});

export const { productListInit, productListSuccess, productListReset } = productSlice.actions;
export default productSlice.reducer;

