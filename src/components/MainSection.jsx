import React from "react";
import { useSelector } from "react-redux";
import LiComponent from "./LiComponent";

import { selectTodo } from "../redux/slices/todoSlice";

const MainSection = () => {
  const [inputValue, setInputValue] = React.useState("");

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const todoArr = useSelector(selectTodo);

  return (
    <>
      <input
        className="mainInput"
        onChange={inputHandler}
        placeholder={"What needs to do?"}
        value={inputValue}
      />
      <section className="main">
        <ul className="todo-list">
          {todoArr.map((item, index) => {
            return <LiComponent todoTitle={item} key={index} />;
          })}
        </ul>
        <ul></ul>
        <footer className="footer">
          <span className="todo-left">X items left</span>
          <ul className="filters">
            <li>All</li>
            <li>Active</li>
            <li>Completed</li>
          </ul>
        </footer>
      </section>
    </>
  );
};

export default MainSection;
