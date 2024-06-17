import React, { useContext } from "react";
import "./layout.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MyContext from "../context/MyContext";
function Layout() {
  const { isSideBarOpen } = useContext(MyContext);
  return (
    <>
      <Header />
      <Sidebar />
      <div>hello main section</div>
    </>
  );
}

export default Layout;
