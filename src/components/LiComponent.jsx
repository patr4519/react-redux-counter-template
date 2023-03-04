import React from "react";

import { useDispatch } from "react-redux";
import { removeItem } from "../redux/slices/todoSlice";

const LiComponent = ({ todoTitle }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{todoTitle}</label>
        <button onClick={() => dispatch(removeItem(todoTitle))}>remove</button>
      </div>
    </li>
  );
};

export default LiComponent;
