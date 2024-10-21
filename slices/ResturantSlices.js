import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resturant: null,
};

export const ResturantSlice = createSlice({
  name: "resturant",
  initialState: initialState,
  reducers: {
    setResturant: (state, action) => {
      state.resturant = action.payload;
    },
  },
});

export const { setResturant } = ResturantSlice.actions;
export default ResturantSlice.reducer;
