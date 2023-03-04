import React from "react";
import { selectTodo } from "../redux/slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectActive, selectCompleted } from "../redux/slices/todoSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const todoArr = useSelector(selectTodo);

  return (
    <footer className="footer">
      <span className="todo-left">{todoArr.items.length} todo(s)</span>
      <ul className="filters">
        <li>All</li>
        <li onClick={() => dispatch(selectActive())}>Active</li>
        <li onClick={() => dispatch(selectCompleted())}>Completed</li>
      </ul>
    </footer>
  );
};

export default Footer;
