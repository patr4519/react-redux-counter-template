import React from "react";

import { useDispatch } from "react-redux";
import { removeItem, completeTodo } from "../redux/slices/todoSlice";

const LiComponent = ({ todoTitle, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div className={`view ${completed ? 'completed' : ''}`}>
        <div className="todo-item">
          <input onClick={() => dispatch(completeTodo(todoTitle))} className="toggle" type="checkbox" />
          <label>{todoTitle}</label>
        </div>
        <button onClick={() => dispatch(removeItem(todoTitle))}>remove</button>
      </div>
    </li>
  );
};

export default LiComponent;
