import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./Main";
import Admin from "./Admin";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </>
  );
}
