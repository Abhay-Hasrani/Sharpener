import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: "light" ,showThemeButton : false};
const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    toggleThemeButton(state){
      state.showThemeButton = !state.showThemeButton;
    }
  },
});

export const themeActions = ThemeSlice.actions;
export default ThemeSlice.reducer;
