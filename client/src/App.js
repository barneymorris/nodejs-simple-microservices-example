import React from "react";
import { PostCreate } from "./components/PostCreate";
import { PostList } from "./components/PostList";

export const App = () => {
  return (
    <div className="container">
      <h1>Create post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};
