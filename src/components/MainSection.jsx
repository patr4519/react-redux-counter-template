import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LiComponent from "./LiComponent";
import { addItem, clearItems } from "../redux/slices/todoSlice";
import { selectTodo } from "../redux/slices/todoSlice";
import Footer from "./Footer";

const MainSection = () => {
  const todoArr = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState("");
  const inputRef = React.useRef(null);
  const [currentSort, setCurrentSort] = React.useState("All");

  const allTodos = todoArr.items;
  const allTodosCompleted = todoArr.items.filter(
    (todo) => todo.completed === true
  );
  const allTodosActive = todoArr.items.filter(
    (todo) => todo.completed === false
  );

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    dispatch(
      addItem({
        text: inputValue,
        completed: false,
      })
    );
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
          {/* {todoArr.items.map((item) => {
            return (
              <LiComponent completed={item.completed} todoTitle={item.text} key={item.text} />
            );
          })} */}
          {currentSort === "All"
            ? todoArr.items.map((item) => {
                return (
                  <LiComponent
                    completed={item.completed}
                    todoTitle={item.text}
                    key={item.text}
                  />
                );
              })
            : currentSort === "Completed"
            ? allTodosCompleted.map((item) => {
                return (
                  <LiComponent
                    completed={item.completed}
                    todoTitle={item.text}
                    key={item.text}
                  />
                );
              })
            : currentSort === "Active"
            ? allTodosActive.map((item) => {
                return (
                  <LiComponent
                    completed={item.completed}
                    todoTitle={item.text}
                    key={item.text}
                  />
                );
              })
            : ""}
        </ul>
        <Footer />
      </section>
    </>
  );
};

export default MainSection;
