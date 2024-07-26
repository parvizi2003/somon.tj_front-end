import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layouts/AdminLayout";
import Home from "./components/admin/home/Home";
import Login from "./components/admin/auth/login/Login";
import Register from "./components/admin/auth/register/Register";

export default function Admin() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
