import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Blog';

const UserBlogs = () => {
  const [blogs, setBlogs] = useState()
  const id = localStorage.getItem("userId");
  const SendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5002/blogs/editor/${id}`)
      .catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
  useEffect(() => {
    SendRequest().then((data) => setBlogs(data.blogs.blogs))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); console.log(blogs);
  return (
    <>
      {blogs &&
        blogs.map((blog, index) => (
          <Blog
            key={index}
            id={blog._id}
            isUser={true}
            title={blog.title}
            description={blog.description}
            cover={blog.cover}
            userName={blog.user.pseudo}
          />
        ))}
    </>
  );
}

export default UserBlogs