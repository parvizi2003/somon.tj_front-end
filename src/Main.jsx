import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components//home/Home";
import Post from "./components/post/Post";
import AddPost from "./components/add-post/AddPost";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import MyPosts from "./components/my-posts/MyPosts";
import Settings from "./components/settings/Settings";
import CategoryPage from "./components/category-page/CategoryPage";

import MainLayout from "./components/layouts/MainLayout";

export default function Main() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/adv/:id" element={<Post />} />
        <Route path="/add-post" element={<AddPost />} />

        <Route path="/profile/login" element={<Login />} />
        <Route path="/profile/register" element={<Register />} />
        <Route path="/profile/items" element={<MyPosts />} />
        <Route path="/profile/settings" element={<Settings />} />

        <Route path="/:category" element={<CategoryPage />} />
      </Route>
    </Routes>
  );
}
