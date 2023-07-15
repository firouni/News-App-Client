import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Blog';
import { useParams } from 'react-router-dom';

const UserBlogs = () => {
  const [user, setUser] = useState();
  const [blogs, setBlogs] = useState({});
  const { _id } = useParams();
  const id = localStorage.getItem({_id});
  //const { _id } = useParams();
    console.log(id,'verId');
  const SendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5002/api/blogs/editor/${blogs._id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log('data',data)
    return data;
  }
  useEffect(() => {
    SendRequest().then((data) => setUser(data.user))
  }, []); console.log(user);
  return (
    <div>
      {" "}
      {user && user.blogs &&
        user.blogs.map((blog, index) => (
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
    </div>
  );
}

export default UserBlogs;