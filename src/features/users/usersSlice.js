import{createSlice,createAsyncThunk}from "@reduxjs/toolkit";
export const fetchUsers=createAsyncThunk(
    "user/fetchUsers", async()=>{
        const response=await  fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const data=await response.json();
        return data;
    }
);
const usersSlice=createSlice({
    name:"users",
    initialState:{
        users:[],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        })
        .addCase(fetchUsers.rejected,(state)=>{
            state.loading=false;
            state.error="Failed to fetch users";
        });
    },
});
export default usersSlice.reducer;