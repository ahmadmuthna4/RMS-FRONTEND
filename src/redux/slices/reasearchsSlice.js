import { createSlice } from "@reduxjs/toolkit";

const ResearchSlice = createSlice({
  name: "Research",
  initialState: {
    Researchs: [],
    
  },
  reducers: {
    
   Researchs(state, action) {
      state.Researchs = action.payload;
    },

  },
});

const ResearchReducer = ResearchSlice.reducer;
const ResearchActions = ResearchSlice.actions;

export { ResearchActions, ResearchReducer };