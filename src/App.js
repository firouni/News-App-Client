import React from "react";
import Header from "./components/Header";
//import Auth from "./components/Auth.jsx";
import Login from "./components/Login/Login";
//import Home from "./components/Home/Home";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import WriteBlogs from "./components/Write/WriteBlogs";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import SubHeader from "./components/SubHeader";
//import Footer from "./components/Footer";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  /*const [posts, setPosts] = useState();
  const relatedPosts = (e) => {
    setPosts([...posts,e])
  }*/

  return (
    <div className="App">
      <Header />
      {isLoggedIn && <SubHeader />}

      <Routes>
        {/*<Route path="/" element={<Home posts={posts} />} />*/}
        <Route path="/auth" element={<Login />} />
        {/*<Route path="/auth" element={<Auth />} />*/}
        <Route path="/blogs" element={<Blogs /*posts={posts}*/ />} />
        <Route path="/myblogs" element={<UserBlogs />} />
        <Route path="/editorial" element={<WriteBlogs />} />
        <Route path="/app/priv" element={<PrivateRoute />} />
      </Routes>

      {/*<Footer/>*/}
    </div>
  );
}

export default App;