import React, { Dispatch, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './state/rootReducer';
import { fetchPosts } from './state/api/fetchPosts';



interface Posts{
  id: number,
  title : string
}

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts);

  function GetPosts() : void{
    dispatch(fetchPosts())
  }

  return (
    <div>
    
      <ul>
      {posts.posts.map((e: Posts, index:number)=> <li key={index}>{e.title}</li>)}
      </ul> 

      <button onClick={GetPosts}>BTN</button>
    </div>
  );
}

export default App;
