import React from "react";
import "../../styles/mainsection.css";

import Attach from "./Attach";
import RichText from "./RichText";
import MyRule from "./MyRule";
import TradeLog from "./TradeLog";

function MainSection() {
  return (
    <div className="main-parent">
      <div className="main-header">
        <h1 className="main-welcome">Welcome back</h1>
        <div className="main-capital">
          <span>Capital:1,00,000</span>
        </div>
      </div>

      <div className="main-date">
        <span>Monday, 31 May 2024</span>
      </div>

      <div className="today-my-rule-section">
        <div className="today-journal">
          <div>
            <div className="today-journal-heading">
              Today’s Journal <span>(Saving)</span>
            </div>
            <RichText />
          </div>
          <Attach />
        </div>
        <MyRule />
      </div>

      <TradeLog />
    </div>
  );
}

export default MainSection;
