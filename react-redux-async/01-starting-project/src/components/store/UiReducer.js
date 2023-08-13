import { createSlice } from "@reduxjs/toolkit";

const UiSlice = createSlice({
  name: "UI",
  initialState: { notificationStatus: "" },
  reducers: {
    setNotificationType(state, action) {
      state.notificationStatus = action.payload;
    },
  },
});
export const uiActions = UiSlice.actions;
export default UiSlice.reducer;
