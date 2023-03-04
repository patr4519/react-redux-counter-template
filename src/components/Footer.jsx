import React from "react";
import { selectTodo } from "../redux/slices/todoSlice";
import { useSelector } from "react-redux";

const Footer = ({ setCurrentSort }) => {
  const todoArr = useSelector(selectTodo);

  return (
    <footer className="footer">
      <span className="todo-left">{todoArr.items.length} todo(s)</span>
      <ul className="filters">
        <li onClick={() => setCurrentSort('All')}>All</li>
        <li onClick={() => setCurrentSort('Active')}>Active</li>
        <li onClick={() => setCurrentSort('Completed')}>Completed</li>
      </ul>
    </footer>
  );
};

export default Footer;
