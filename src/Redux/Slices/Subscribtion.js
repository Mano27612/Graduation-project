import { createSlice } from "@reduxjs/toolkit";

const SubscribtionsSlice = createSlice({
  name: "subscribtions",
  initialState: JSON.parse(localStorage.getItem("subscribtions")) || [],
  reducers: {
    addSubscriptions: (state, action) => {
      const newSubscription = action.payload;
      const updatedSubscriptions = [...state, newSubscription];
      localStorage.setItem(
        "subscribtions",
        JSON.stringify(updatedSubscriptions)
      );
      return updatedSubscriptions;
    },
    removeSubscriptions: (state, action) => {
      const videoId = action.payload;
      const updatedSubscriptions = state.filter(
        (subscription) => subscription.id !== videoId
      );
      localStorage.setItem(
        "subscribtions",
        JSON.stringify(updatedSubscriptions)
      );
      return updatedSubscriptions;
    },
  },
});
export default SubscribtionsSlice.reducer;
export const { addSubscriptions, removeSubscriptions } =
  SubscribtionsSlice.actions;
