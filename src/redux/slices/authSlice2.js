import  {createSlice} from "@reduxjs/toolkit"

const authSlice= createSlice({
    name:"auth",
    initialState:{
        users:null,
        profile:null,

        
    },
    reducers:{
        getalluser(state,action){
            state.users=action.payload
        },
        getprofileuser(state){
            state.auth=action.payload
        },
       
    }
})

const authReducer= authSlice.reducer
const authAction=authSlice.actions
export {authAction,authReducer}