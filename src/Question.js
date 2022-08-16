import React from "react";

export default function Question({ name, status }) {
  const statusClass =
    status == null ? "unattempted" : status.toLowerCase().replace("_", "-");
  return (
    <div className="question">
      <div className={`status ${statusClass}`}></div>
      <h3>{name}</h3>
    </div>
  );
}
