import React from "react";

import { useDispatch } from "react-redux";
import { removeItem } from "../redux/slices/todoSlice";

const LiComponent = ({ todoTitle }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div className="view">
        <div className="todo-item">
          <input className="toggle" type="checkbox" />
          <label>{todoTitle}</label>
        </div>
        <button onClick={() => dispatch(removeItem(todoTitle))}>remove</button>
      </div>
    </li>
  );
};

export default LiComponent;
