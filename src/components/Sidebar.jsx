import React, { useContext, useState } from "react";
import "./sidebar.css";
import MyContext from "../context/MyContext";
import CategoryIcon from "../images/Category.png";
import accountIcon from "../images/account.png";
import Account_partnerIcon from "../images/Account_Partner.png";
import performance_analyticsIcon from "../images/performance_analytics.png";
import DocumentIcon from "../images/Document.png";

function Sidebar() {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(MyContext);
  const [navOptions, setNavOptions] = useState([
    { name: "Dashboard", isSelected: true, icon: CategoryIcon },
    { name: "My Journal", isSelected: false, icon: "bi bi-file-text" },
    {
      name: "Performance Analytics",
      isSelected: false,
      icon: "bi bi-suitcase-lg",
    },
    {
      name: "Accountability Partner",
      isSelected: false,
      icon:"bi bi-people",
    },
    { name: "My Account", isSelected: false, icon: "bi bi-person" },
  ]);

  const onClickNavItem = (index) => {
    const newNavOptions = navOptions.map((it, idx) => {
      if (index === idx) {
        it.isSelected = true;
      } else {
        it.isSelected = false;
      }
      return it;
    });
    setNavOptions(newNavOptions);
  };

  return (
    <div
      style={{
        transform: isSideBarOpen ? "translateX(0)" : "translateX(-100%)",
      }}
      className={`sidebar`}
    >
      <div>
        <a href="/" className="d-flex align-item-center logo">
          <img src="" alt="" />
          <span className="d-none d-lg-block">Tradeboard</span>
        </a>
        <ul className="dashboard-nav-container">
          {navOptions.map((item, index) => {
            return (
              <li
                onClick={() => onClickNavItem(index)}
                className="dashboard-item"
                style={{
                  backgroundColor: item.isSelected
                    ? "rgba(131, 69, 225, 1)"
                    : "#fff",
                }}
              >
                <a href="#">
                  {/* <img
                    src={item.icon}
                    alt=""
                    className="dashboard-icon"
                    style={{ color: item.isSelected ? "white" : "black" }}
                  /> */}
                  <i
                    className={`${item.icon} ${
                      item.isSelected ? "text-white" : "text-black"
                    }`}
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <span style={{ color: item.isSelected ? "white" : "black" }}>
                    {item.name}
                  </span>
                </a>
              </li>
            );
          })}
          {/* <li>My Journal</li>
          <li>Performance Analytics</li>
          <li>Accountability Partner</li>
          <li>My Account</li> */}
        </ul>
      </div>
      <div>
        <ul>
          <li>Contact support</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
