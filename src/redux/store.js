import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";

import { RegisteredResearchReducer } from "./slices/postSlice";
import { ModificationRrequestReducer } from "./slices/modificationRrequestSlice";
import { ResearchReducer } from "./slices/reasearchsSlice";
import { ResearchNotAprovedReducer } from "./slices/ResearchNotAprovedSlice";
import { PublishedResearchReducer } from "./slices/postSlice2";
import {usersReducer } from "./slices/usersSlice";
import { profileReducer } from "./slices/profileSlice";

const store = configureStore({
    reducer: {
       auth: authReducer,
       profile: profileReducer,
       RegisteredResearch: RegisteredResearchReducer,
       ModificationRrequest: ModificationRrequestReducer,
       Research: ResearchReducer,
       ResearchNotAproved: ResearchNotAprovedReducer,
       PublishedResearch: PublishedResearchReducer,
       users: usersReducer,
   
    }
});

export default store;