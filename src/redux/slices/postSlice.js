import { createSlice } from "@reduxjs/toolkit";

const RegisteredResearchSlice = createSlice({
  name: "RegisteredResearch",
  initialState: {
    RegisteredResearchs: [],
    RegisteredResearchsCount: null,
    RegisteredResearchsApprovedCount: null,
    loading: false,
    isRegisteredResearch2Created: false,
    RegisteredResearch:null,
    deleteMessage: null,
  },
  reducers: {
    
   RegisteredResearchs2(state, action) {
      state.RegisteredResearchs = action.payload;
    },
    setRegisteredResearchs2Count(state, action) {
      state.RegisteredResearchsCount = action.payload;
    },
    setRegisteredResearchs2ApprovedCount(state, action) {
      state.RegisteredResearchsApprovedCount = action.payload;
    },
    


    setLoading(state) {
      state.loading = true;
    },


    clearLoading(state) {
      state.loading = false;
    },


    setIsRegisteredResearch2Created(state) {
      state.isRegisteredResearch2Created = true;
      state.loading = false;
    },


    clearIsRegisteredResearch2Created(state) {
      state.isRegisteredResearch2Created = false;
    },


  
    setRegisteredResearch2(state,action) {
      state.RegisteredResearch = action.payload;
    },
    updateRegisteredResearch(state,action) {
      state.RegisteredResearch = action.payload;
    },
    deleteRegisteredResearch(state,action) {
      state.deleteMessage = action.payload;
    },




 
  },
});

const RegisteredResearchReducer = RegisteredResearchSlice.reducer;
const RegisteredResearchActions = RegisteredResearchSlice.actions;

export { RegisteredResearchActions, RegisteredResearchReducer };