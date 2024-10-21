import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addtoCart: (state, action) => {
      const item = action.payload;
      console.log(action.payload, "action from cartslice");
      const existedItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existedItem) {
        existedItem.quantity += 1;
        console.log(existedItem, existedItem.quantity, "existed");
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removefromCart: (state, action) => {
      console.log(action.payload, "action from cartslice");
      let newCart = [...state.items];
      const itemIndex = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      const remQty = state.items.find((item) => item.id === action.payload.id);
      if (remQty.quantity > 1) {
        remQty.quantity--;
        console.log(remQty, remQty.quantity, "removeQuantity");
        return;
      }
      if (itemIndex <= state.items.length) {
        newCart.splice(itemIndex, 1);
      } else {
        console.log("Item not found");
      }
      state.items = newCart;
    },

    emptyCart: (state) => {
      state.items = [];
    },
  },
});
export const selectCartItemById = (state, id) =>
  state.cart.items.filter((item) => item.id == id);

export const { addtoCart, removefromCart, emptyCart } = CartSlice.actions;
export default CartSlice.reducer;
