import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    userss: [],
    userssCount: null,
    loading: false,
    isusers2Created: false,
    users:null,
  },
  reducers: {
    
   userss2(state, action) {
      state.userss = action.payload;
    },
    setuserss2Count(state, action) {
      state.userssCount = action.payload;
    },
    


    setLoading(state) {
      state.loading = true;
    },


    clearLoading(state) {
      state.loading = false;
    },


    setIsusers2Created(state) {
      state.isusers2Created = true;
      state.loading = false;
    },


    clearIsusers2Created(state) {
      state.isusers2Created = false;
    },


  
    setusers2(state,action) {
      state.users = action.payload;
    },




 
  },
});

const usersReducer = usersSlice.reducer;
const usersActions = usersSlice.actions;

export { usersActions, usersReducer };