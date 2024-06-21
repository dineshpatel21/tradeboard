import React, { useContext, useState } from "react";
import "../../styles/sidebar.css";
import MyContext from "../../context/MyContext";
import CategoryIcon from "../../assets/images/Category.png";
import accountIcon from "../../assets/images/account.png";
import Account_partnerIcon from "../../assets/images/Account_Partner.png";
import performance_analyticsIcon from "../../assets/images/performance_analytics.png";
import DocumentIcon from "../../assets/images/Document.png";

function Sidebar() {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(MyContext);
  const [navOptions, setNavOptions] = useState([
    { name: "Dashboard", isSelected: true, icon: CategoryIcon },
    { name: "My Journal", isSelected: false, icon: DocumentIcon },
    {
      name: "Performance Analytics",
      isSelected: false,
      icon: performance_analyticsIcon,
    },
    {
      name: "Accountability Partner",
      isSelected: false,
      icon:Account_partnerIcon,
    },
    { name: "My Account", isSelected: false, icon: accountIcon },
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
    <aside
      style={{
        //transform: isSideBarOpen ? "translateX(0)" : "translateX(-100%)",
      }}
      className="sidebar"
    >
      <div>
        <a href="/" className="d-flex align-item-center logo">
          <img src="" alt="" />
          <span className="heading">Tradeboard</span>
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
                  <img
                    src={item.icon}
                    alt=""
                    className="dashboard-icon"
                    style={{ color: item.isSelected ? "white" : "black" }}
                  />
                  {/* <i
                    className={`${item.icon} ${
                      item.isSelected ? "text-white" : "text-black"
                    }`}
                    style={{ fontSize: "2rem" }}
                  ></i> */}
                  <span style={{ color: item.isSelected ? "white" : "black",fontSize:14,fontWeight: '400', }}>
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

      <div style={{borderWidth: 1,}}>
        <ul>
          <li>Contact support</li>
          <li>Logout</li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
