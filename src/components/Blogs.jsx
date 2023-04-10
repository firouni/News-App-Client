import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const response = await axios.get("http://localhost:5002/blogs/get")
      .catch(err => console.log(err));
    const data = await response.data;
    return data;
  }
  useEffect(() => {
    sendRequest().then(data => setBlogs(data.blogs))
  }, []);
      console.log(blogs);
  return (
    <div>
      {blogs && blogs.map((blog, index) => (
        <Blog
          id={blog._id}
          isUser={localStorage.getItem("userId") === blog.user._id}
          title={blog.title}
          description={blog.description}
          cover={blog.cover}
          userName={blog.user.pseudo}
        />
      ))}
    </div>
  )
}

export default Blogs