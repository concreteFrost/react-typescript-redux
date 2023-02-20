import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface Post{
    id: number,
    title: string,
    body: string
}

export const fetchPosts = createAsyncThunk<Post[]>(
    "fetchPosts",
    async () => {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    }
)