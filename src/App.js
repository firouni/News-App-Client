import Header from "./components/Header";
import Login from "./components/Login/Login";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import WriteBlogs from "./components/Write/WriteBlogs";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import SubHeader from "./components/SubHeader";
import Footer from "./components/Footer";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div className="App">
      <Header />
      <SubHeader/>

      <Routes>
        <Route path="/auth" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myblogs" element={<UserBlogs />} />
        <Route path="/editorial" element={<WriteBlogs />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;