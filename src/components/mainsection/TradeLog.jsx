import React from "react";
import "../../styles/tradelog.css";
import TradeLogHeader from "./TradeLogHeader";
import TradeLogCloseOpen from "./TradeLogCloseOpen";
import TradeLogTable from "./TradeLogTable";

function TradeLog() {
  return (
    <div className="tradelog-header-container">
      <TradeLogHeader />
      <TradeLogCloseOpen />
      <TradeLogTable/>
    </div>
  );
}

export default TradeLog;
