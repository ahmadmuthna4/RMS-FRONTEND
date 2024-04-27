import { createSlice } from "@reduxjs/toolkit";

const ModificationRrequestSlice = createSlice({
  name: "ModificationRrequest",
  initialState: {
    ModificationRrequests: [],
    ModificationRrequestsCount: null,
    loading: false,
    isModificationRrequestsCreated: false,
    ModificationRrequest:null,
    deleteMessage: null,
  },
  reducers: {
    
    ModificationRrequest(state, action) {
      state.ModificationRrequests = action.payload;
    },
    setModificationRrequestCount(state, action) {
      state.ModificationRrequestsCount = action.payload;
    },
    AprovedModificationRrequest(state, action) {
      state.ModificationRrequest = action.payload;
    },
    


    setLoading(state) {
      state.loading = true;
    },


    clearLoading(state) {
      state.loading = false;
    },


    setIsModificationRrequestsCreated(state) {
      state.isModificationRrequestsCreated = true;
      state.loading = false;
    },


    clearIsModificationRrequestsCreated(state) {
      state.isModificationRrequestsCreated = false;
    },


  
    setModificationRrequest(state,action) {
      state.ModificationRrequest = action.payload;
    },
    // updateRegisteredResearch(state,action) {
    //   state.RegisteredResearch = action.payload;
    // },
    // deleteRegisteredResearch(state,action) {
    //   state.deleteMessage = action.payload;
    // },




 
  },
});

const ModificationRrequestReducer = ModificationRrequestSlice.reducer;
const ModificationRrequestActions = ModificationRrequestSlice.actions;

export { ModificationRrequestActions, ModificationRrequestReducer };