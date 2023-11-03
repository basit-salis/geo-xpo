/** @format */

import React from "react";
import style from "../assets/css/home.module.css";
const TableRow = ({data}) => {
  return (
    <>
      <td>{data.tracking_id}</td>
      <td className="font-weight-bold">{data.sender.name}</td>
      <td>{data.recipient.name}</td>
      <td>{data.total_cost}</td>
      <td className="font-weight-medium">
        <div
          className={`${style.badge} ${
            data.status === true
              ? style.badge_success
              : data.status === false
              ? style.badge_cancelled
              : style.badge_warning
          }`}
        >
          {data.status === true
            ? "Completed"
            : data.status === false
            ? "cancelled"
            : "pending"}
        </div>
      </td>
    </>
  );
};
const HomeTable = ({tableData}) => {

  return (
    <div className={`card my-5 ${style.card}`}>
      <div className="card-body">
        <p className="card-title mb-0 fw-bold">Top Products</p>
        <div className="table-responsive">
          <table className="table table-striped table-borderless">
            <thead>
              <tr>
                <th>Tracking ID</th>
                <th>Sender</th>
                <th>Recipient</th>
                <th>Cost</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row._id}>
                  <TableRow data={row} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeTable;
