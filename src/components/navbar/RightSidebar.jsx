import React, { useContext, useState } from "react";
import "../../styles/rightsidebar.css";
import "../../styles/sidebar.css";
import MyContext from "../../context/MyContext";
import CategoryIcon from "../../assets/images/Category.png";
import accountIcon from "../../assets/images/account.png";
import Account_partnerIcon from "../../assets/images/Account_Partner.png";
import performance_analyticsIcon from "../../assets/images/performance_analytics.png";
import DocumentIcon from "../../assets/images/Document.png";
import rightsideIcon from "../../assets/icons/right-side.png";

function RightSidebar() {
  const { isRightSideBarOpen, toggleRightSideBar } = useContext(MyContext);
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
      icon: "bi bi-people",
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
    <aside
      className="rsidebar "
      style={{
        position: "relative",
        // right: isRightSideBarOpen ? 0 : -289,
        width: isRightSideBarOpen ? 0 : "100%",
      }}
    >
      <div
        className="position-absolute trade-log-table-table"
        style={{
          top: "50%",
          left: -5,
          cursor: "pointer",
          display: !isRightSideBarOpen && "none",
        }}
        onClick={() => toggleRightSideBar()}
      >
        <img
          src={rightsideIcon}
          alt="left icon"
          style={{ width: 6, height: 12 }}
        />
      </div>

      <div>Performance</div>
    </aside>
  );
}

export default RightSidebar;
