import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProductData = createAsyncThunk("product/fetch", async () => {
  const resp = await fetch("https://fakestoreapi.com/products");
  return resp.json();
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    error: "",
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProductData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllProductData.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(getAllProductData.rejected, (state, action) => {
      state.error = action.payload || "Something went wrong!";
      state.loading = false;
    });
  },
});

//selectors

export const selectProducts = (state) => state.products.list;

export const productReducer = productSlice.reducer;
