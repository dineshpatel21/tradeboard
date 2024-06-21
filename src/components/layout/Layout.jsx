import React, { useContext } from "react";
import "../../styles/layout.css";
import Sidebar from "../navbar/Sidebar";
import RightSidebar from "../navbar/RightSidebar";
import MainSection from "../../components/mainsection/MainSection";
import Header from "../../components/header/Header";
import MyContext from "../../context/MyContext";
function Layout() {
  const { isSideBarOpen, toggleSideBar } = useContext(MyContext);
  return (
    <div className="grid-container">
      <div className={`leftsection ${isSideBarOpen ? "" : "collapsed"}`}>
        <Sidebar/>
      </div>
      <div className="rightsection">
        <div className="rightsection-header">
          <Header />
        </div>
        <div className="rightsection-content">
         <MainSection/>
          {isSideBarOpen && <RightSidebar/>}
        </div>
      </div>
    </div>
  );
}

export default Layout;
