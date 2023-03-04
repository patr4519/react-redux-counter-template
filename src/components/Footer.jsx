import React from "react";
import { selectTodo } from "../redux/slices/todoSlice";
import { useSelector } from "react-redux";

const Footer = () => {
  const todoArr = useSelector(selectTodo);

  return (
    <footer className="footer">
      <span className="todo-left">{todoArr.items.length} todo(s)</span>
      <ul className="filters">
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
    </footer>
  );
};

export default Footer;
