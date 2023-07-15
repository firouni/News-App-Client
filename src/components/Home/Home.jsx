/*import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Menu from '../Related/Menu';
import axios from 'axios';
import posts from "../../PostsData";

const Home = (posts) => {
  const [posts, setPosts] = useState([])
  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.cover} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`} >
                <h1>{post.title}</h1>
              </Link>
              <p> {post.description} </p>
              <button>Read More</button>
            </div>

              <Menu cat={post.cat} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;*/