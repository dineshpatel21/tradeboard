import React, { useContext } from "react";
import "./header.css";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Nav from "./Nav";
import MyContext from "../context/MyContext";

function Header() {
  const { isSideBarOpen } = useContext(MyContext);
  return (
    <header
      id="header"
      style={{
        // width: isSideBarOpen ? "80%" : "100%",
        position: isSideBarOpen ? "relative" : "fixed",
      }}
      className="header fixed-top d-flex align-items-center"
    >
      {/* {Logo} */}
      <Logo />
      {/* {Search bar} */}
      {/* <Searchbar/> */}
      {/* {nav} */}
      <Nav />
    </header>
  );
}

export default Header;
