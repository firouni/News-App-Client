import React from "react";
import "./Menu.scss";
import posts from "../../PostsData";

const Menu = (posts) => {
  return (
    <div className="menu">
      <h1>Other posts</h1>
      {posts.map(post => (
        <div className="post" key={post.id}>
          <img src={post.cover} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu