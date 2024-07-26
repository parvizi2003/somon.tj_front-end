import { Outlet } from "react-router-dom";
import Header from "../admin/header/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
