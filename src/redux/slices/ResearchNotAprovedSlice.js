import { createSlice} from "@reduxjs/toolkit"


const ResearchNotAprovedSlice=createSlice({
    name:"ResearchNotAproved",
    initialState:{
        Research:[],
        research:null

    },
    reducers:{
        ResearchNotAproved(state, action) {
            state.Research = action.payload;
          },
        AprovedResearch(state, action) {
            state.research = action.payload;
          },
    }
})

const ResearchNotAprovedReducer = ResearchNotAprovedSlice.reducer;
const ResearchNotAprovedActions = ResearchNotAprovedSlice.actions;

export { ResearchNotAprovedActions, ResearchNotAprovedReducer };