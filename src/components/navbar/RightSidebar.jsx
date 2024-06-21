import React, { useContext, useState } from "react";
import "../../styles/rightsidebar.css";
import "../../styles/sidebar.css";
import MyContext from "../../context/MyContext";
import CategoryIcon from "../../assets/images/Category.png";
import accountIcon from "../../assets/images/account.png";
import Account_partnerIcon from "../../assets/images/Account_Partner.png";
import performance_analyticsIcon from "../../assets/images/performance_analytics.png";
import DocumentIcon from "../../assets/images/Document.png";

function RightSidebar() {
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
    isSideBarOpen && (
      <div
        style={{
          //transform: isSideBarOpen ? "translateX(0)" : "translateX(100%)",
        }}
        className={`rsidebar`}
      >
        <span>Performance</span>
        <div className="box">No of Trades (Daily order limit: 4)</div>
        <div className="box">Winning vs Losing Trades</div>
        <div className="box">Profit & Loss</div>
        <div className="box">Rule Score</div>
      </div>
    )
  );
}

export default RightSidebar;
