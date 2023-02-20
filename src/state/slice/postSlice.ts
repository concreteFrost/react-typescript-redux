import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../api/fetchPosts";

interface Post {
    id: number,
    title: string,
    body: string
}

interface PostState {
    posts: Post[],
    loading: boolean,
    error: string | null
}

const initialState: PostState = {
    posts: [],
    loading: false,
    error: null
}



const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true;
            state.error = null;
           

        });
        builder.addCase(fetchPosts.fulfilled, (state, action)=>{
            state.loading = false;
            state.posts = action.payload;
            console.log("loading")

        })
        builder.addCase(fetchPosts.rejected, (state)=>{
            state.loading = false;
            state.error = "Error"
        })
    }
})

export default postSlice.reducer;