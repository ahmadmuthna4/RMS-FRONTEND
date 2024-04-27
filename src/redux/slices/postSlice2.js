import { createSlice } from "@reduxjs/toolkit";

const PublishedResearchSlice = createSlice({
  name: "PublishedResearch",
  initialState: {
    PublishedResearchs: [],
    PublishedResearchsCount: null,
    loading: false,
    isPublishedResearch2Created: false,
    PublishedResearch:null,
    deleteMessage: null,
  },
  reducers: {
    
    PublishedResearchs2(state, action) {
      state.PublishedResearchs = action.payload;
    },
    setPublishedResearchs2Count(state, action) {
      state.PublishedResearchsCount = action.payload;
    },
    


    setLoading(state) {
      state.loading = true;
    },


    clearLoading(state) {
      state.loading = false;
    },


    setIsPublishedResearch2Created(state) {
      state.isPublishedResearch2Created = true;
      state.loading = false;
    },


    clearIsPublishedResearch2Created(state) {
      state.isPublishedResearch2Created = false;
    },

    updatePublishedResearch(state,action) {
      state.PublishedResearch = action.payload;
    },

  
    setPublishedResearch2(state,action) {
      state.PublishedResearch = action.payload;
    },
    deletePublishResearch(state,action) {
      state.deleteMessage = action.payload;
    },





 
  },
});

const PublishedResearchReducer = PublishedResearchSlice.reducer;
const PublishedResearchActions = PublishedResearchSlice.actions;

export { PublishedResearchActions, PublishedResearchReducer };