import { createSlice } from "@reduxjs/toolkit";

const DislikeVideoSlice = createSlice({
  name: "dislikedVideos",
  initialState: JSON.parse(localStorage.getItem("dislikedVideos")) || [],
  reducers: {
    addDisLikedVideo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("dislikedVideos", JSON.stringify(state));
    },
    removeDisLikedVideo: (state, action) => {
      const videoId = action.payload;
      const updatedVideos = state.filter((video) => video.id !== videoId);
      state.splice(0, state.length, ...updatedVideos);
      localStorage.setItem("dislikedVideos", JSON.stringify(state));
    },
  },
});
export default DislikeVideoSlice.reducer;
export const { addDisLikedVideo, removeDisLikedVideo } = DislikeVideoSlice.actions;
