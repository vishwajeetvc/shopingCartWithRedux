import { createSelector, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

function findItemIndex(state, action) {
  return state.list.findIndex(
    (item) => item.productId == action.payload.productId,
  );
}

export const getAllCartItemsData = createAsyncThunk("cart/fetch", async () => {
  const resp = await fetch("https://fakestoreapi.com/carts/5");
  return resp.json();
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    error: "",
    list: [],
  },
  reducers: {
    // Only the name will be used as action creaters.
    // These functions are not action creaters
    // these are the case of switch ( you should know case can be written in form of objects)
    addInCart(state, action) {
      const foundItemIndex = findItemIndex(state, action);
      if (foundItemIndex == -1) {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const foundItemIndex = findItemIndex(state, action);
      if (foundItemIndex != -1) {
        state.list.splice(foundItemIndex, 1);
      }
    },
    incQtyInCart(state, action) {
      const foundItemIndex = findItemIndex(state, action);
      if (foundItemIndex != -1) {
        state.list[foundItemIndex].quantity += 1;
      }
    },
    decQtyInCart(state, action) {
      const foundItemIndex = findItemIndex(state, action);
      if (foundItemIndex != -1) {
        if (state.list[foundItemIndex].quantity > 1) {
          state.list[foundItemIndex].quantity -= 1;
        } else {
          state.list.splice(foundItemIndex, 1);
        }
      }
    },
  },
  // related to createAsyncThunk
  // first pending
  // fulfilled (if data fetched successfully)
  // reject (if any error in createAsyncThunk callback)
  extraReducers: (builder) => {
    builder.addCase(getAllCartItemsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllCartItemsData.fulfilled, (state, action) => {
      state.list = action.payload.products;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(getAllCartItemsData.rejected, (state, action) => {
      state.error = action.payload || "Something went wrong!";
      state.loading = false;
    });
  },
});

//action creaters
export const { addInCart, removeFromCart, incQtyInCart, decQtyInCart } =
  cartSlice.actions;

//selectors
export const cartItemsLength = (state) => state.cart.list.length;
export const selectCartItems = createSelector(
  [(state) => state.products, (state) => state.cart],
  (products, cart) => {
    return cart.list.map((item) => {
      const foundItem = products.list.find(
        (product) => product.id == item.productId,
      );
      return { ...foundItem, quantity: item.quantity };
    });
  },
);

export const cartReducer = cartSlice.reducer;
