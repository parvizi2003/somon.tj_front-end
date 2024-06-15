import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import CategoryPage from "./components/category-page/CategoryPage";
import Post from "./components/post/Post";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AddPost from "./components/add-post/AddPost";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adv/:id" element={<Post />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/profile/login" element={<Login />} />
        <Route path="/profile/register" element={<Register />} />
        <Route path="/:category" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </>
  );
}
