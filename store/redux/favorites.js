import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload);
    },

    removeFavorite: (state, action) => {
      state.ids = state.ids.filter((id) => id !== action.payload);
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
