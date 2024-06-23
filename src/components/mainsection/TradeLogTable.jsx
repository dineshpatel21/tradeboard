import React from "react";
import "../../styles/tradelogtable.css";
import editicon from "../../assets/images/Edit.png";
import deleteicon from "../../assets/images/delete.png";

function TradeLogTable() {
  return (
    <table className="trade-table">
      <thead>
        <tr>
          <th>Date-Time</th>
          <th>Instrument Name</th>
          <th>Quantity </th>
          <th>Buying Price </th>
          <th>Selling Price </th>
          <th>Charges </th>
          <th>Brokerage</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>24-5-2024, 10:30:25</td>
          <td>Tata Motor</td>
          <td>50</td>
          <td>₹ 296</td>
          <td>₹ 500</td>
          <td>₹ 12</td>
          <td>₹ 12</td>
          <td>closed</td>
          <td>
            <img src={editicon} alt="edit" />
            <img src={deleteicon} alt="delete" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TradeLogTable;
