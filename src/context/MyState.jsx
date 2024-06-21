import React, { useState, useEffect } from "react";
import MyContext from "./MyContext";

function MyState({ children }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  

  return (
    <MyContext.Provider value={{ isSideBarOpen, toggleSideBar }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
