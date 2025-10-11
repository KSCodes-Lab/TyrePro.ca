// store/actions/products.ts
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchData", async () => {
    // console.log("action");
  const response = await fetch("https://tyrepro.onrender.com/api/tires");
  return response.json();
});
