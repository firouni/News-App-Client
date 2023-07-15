/*import React, { useEffect, useState } from "react";
import "./Menu.scss";
import axios from "axios";
import posts from "../../PostsData";

const Menu = ({ cat, posts }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`/posts/?cat=${cat}`);
          setPosts(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, [cat]);
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

export default Menu*/