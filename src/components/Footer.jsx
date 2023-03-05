import React from "react";
import { selectTodo } from "../redux/slices/todoSlice";
import { useSelector } from "react-redux";

const Footer = ({ setCurrentSort }) => {
  const todoArr = useSelector(selectTodo);
  const [active, setActive] = React.useState('All')

  const setAll = () => {
    setCurrentSort('All');
    setActive('All')
  }

  const setActives = () => {
    setCurrentSort('Active');
    setActive('Active')
  }

  const setCompleted = () => {
    setCurrentSort('Completed');
    setActive('Completed')
  }

  return (
    <footer className="footer">
      <span className="todo-left">{todoArr.items.length} todo(s)</span>
      <ul className="filters">
        <li className={active === 'All' ? 'active' : ''} onClick={setAll}>All</li>
        <li className={active === 'Active' ? 'active' : ''} onClick={setActives}>Active</li>
        <li className={active === 'Completed' ? 'active' : ''} onClick={setCompleted}>Completed</li>
      </ul>
    </footer>
  );
};

export default Footer;
