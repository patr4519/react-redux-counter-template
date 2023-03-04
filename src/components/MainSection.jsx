import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LiComponent from "./LiComponent";
import { addItem, clearItems } from "../redux/slices/todoSlice";
import { selectTodo } from "../redux/slices/todoSlice";

const MainSection = () => {
  const todoArr = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState("");
  const inputRef = React.useRef(null);

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    dispatch(addItem(inputValue));
    setInputValue("");
    inputRef.current.focus();
  };

  return (
    <>
      <input
        className="mainInput"
        onChange={inputHandler}
        placeholder={"What needs to do?"}
        value={inputValue}
        ref={inputRef}
      />
      <section className="main">
        <button onClick={addTodo}>Add</button>
        <button onClick={() => dispatch(clearItems())}>Clear</button>
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
