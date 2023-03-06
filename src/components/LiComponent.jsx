import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { removeItem, completeTodo } from "../redux/slices/todoSlice";
import AlertDialog from "./Desctiption";

const LiComponent = ({ todoTitle, completed, description }) => {
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
        <div className="leftBlock">
          {description && description.length > 0 && (
            <AlertDialog todoTitle={todoTitle} description={description ? description : ""} />
          )}
          <div
            className="deleteIcon"
            onClick={() => dispatch(removeItem(todoTitle))}
          >
            <DeleteIcon sx={{ color: red[600] }} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default LiComponent;
