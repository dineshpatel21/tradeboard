import React, { useContext, useState } from "react";
import "../../styles/sidebar.css";
import MyContext from "../../context/MyContext";
import CategoryIcon from "../../assets/images/Category.png";
import accountIcon from "../../assets/images/account.png";
import Account_partnerIcon from "../../assets/images/Account_Partner.png";
import performance_analyticsIcon from "../../assets/images/performance_analytics.png";
import DocumentIcon from "../../assets/images/Document.png";
import logoutIcon from "../../assets/images/logout.png";
import contactIcon from "../../assets/images/contact.png";
import lockIcon from "../../assets/images/lock.png";
import leftsideIcon from "../../assets/icons/left-side.png";
import rightsideIcon from "../../assets/icons/right-side.png";

function Sidebar() {
  const { isLeftSideBarOpen, setIsLeftSideBarOpen, toggleLeftSideBar } =
    useContext(MyContext);
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
      icon: Account_partnerIcon,
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

  const handleToggleSidebar = () => {
    toggleLeftSideBar();
  };

  return (
    <aside
      style={{
        position: "relative",
        left: isLeftSideBarOpen ? 0 : -289,
        transition:"left 0.3s ease-in-out",
        backgroundColor:"white",
        height:'100%'
      }}
    >
      <div
        className="position-absolute trade-log-table-table"
        style={{ top: "50%", right: -10, cursor: "pointer",zIndex: 999, }}
        onClick={() => toggleLeftSideBar()}
      >
        <img
          src={leftsideIcon}
          alt="left icon"
          style={{ width: 6, height: 12 }}
        />
      </div>

      <div>
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

                  <span
                    style={{
                      color: item.isSelected ? "white" : "black",
                      fontSize: 14,
                      fontWeight: "400",
                    }}
                  >
                    {item.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="d-flex  flex-column">
        <div className="d-flex  flex-column lock-container">
          <img src={lockIcon} alt="lock-icon" />
          <p>Upgrade to PRO for more features.</p>
          <button>
            <span>Upgrade</span>
          </button>
        </div>
        {/* <ul>
        <li className="lsidebar-logout">
          <img src={contactIcon} alt="contact" />
          <a>Contact support</a>
        </li>
        <li className="lsidebar-logout">
          <img src={logoutIcon} alt="logout" />
          <a>Logout</a>
        </li>
      </ul> */}
      </div>
    </aside>
  );
}

export default Sidebar;
