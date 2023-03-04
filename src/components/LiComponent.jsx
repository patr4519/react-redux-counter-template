import React from "react";

const LiComponent = ({ todoTitle }) => {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{todoTitle}</label>
      </div>
    </li>
  );
};

export default LiComponent;
