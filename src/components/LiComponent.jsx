import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";

import { useDispatch } from "react-redux";
import { removeItem, completeTodo } from "../redux/slices/todoSlice";

const LiComponent = ({ todoTitle, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div className="view">
        <div className={`todo-item ${completed ? "completed" : ""}`}>
          <input
            onClick={() => dispatch(completeTodo(todoTitle))}
            type="checkbox"
            checked={completed}
            readOnly
          />
          <label>{todoTitle}</label>
        </div>
        <div
          className="deleteIcon"
          onClick={() => dispatch(removeItem(todoTitle))}
        >
          <DeleteIcon sx={{ color: red[500] }} />
        </div>
      </div>
    </li>
  );
};

export default LiComponent;
