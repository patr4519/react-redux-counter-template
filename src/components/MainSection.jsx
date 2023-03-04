import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LiComponent from "./LiComponent";
import { addItem } from "../redux/slices/todoSlice";
import { selectTodo } from "../redux/slices/todoSlice";

const MainSection = () => {
  const todoArr = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState("");

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };


  return (
    <>
      <input
        className="mainInput"
        onChange={inputHandler}
        placeholder={"What needs to do?"}
        value={inputValue}
      />
      <section className="main">
        <button onClick={() => dispatch(addItem(inputValue))}>Add</button>
        <ul className="todo-list">
          {todoArr.map((item) => {
            return <LiComponent todoTitle={item} key={item} />;
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
