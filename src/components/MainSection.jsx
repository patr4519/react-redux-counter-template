import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearItems } from "../redux/slices/todoSlice";
import { selectTodo } from "../redux/slices/todoSlice";
import LiComponent from "./LiComponent";
import Footer from "./Footer";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import close from "../img/close.svg";

const MainSection = () => {
  const dispatch = useDispatch();
  const todoArr = useSelector(selectTodo);
  const [inputValue, setInputValue] = React.useState("");
  const [descValue, setDescValue] = React.useState("");
  const [currentSort, setCurrentSort] = React.useState("All");
  const inputRef = React.useRef(null);

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

  const descHandler = (e) => {
    setDescValue(e.target.value);
  }

  const addTodo = () => {
    dispatch(
      addItem({
        text: inputValue,
        completed: false,
        description: descValue
      })
    );
    setInputValue("");
    setDescValue("");
    inputRef.current.focus();
  };

  return (
    <>
      <div className="form__group">
        <input
          type="text"
          className="form__input"
          placeholder="What need to do?"
          value={inputValue}
          ref={inputRef}
          onChange={inputHandler}
        />
        <input
          type="text"
          className="form__input__desc"
          placeholder="Description"
          value={descValue}
          onChange={descHandler}
        />
        {inputValue.length > 0 && (
          <img
            onClick={() => setInputValue("")}
            className="close"
            width={30}
            src={close}
            alt="close"
          />
        )}
      </div>
      <section className="main">
        <Stack spacing={1} direction="row">
          <Button
            onClick={addTodo}
            size="small"
            variant="contained"
            color="success"
          >
            Add
          </Button>
          <Button
            onClick={() => dispatch(clearItems())}
            variant="outlined"
            color="error"
            size="small"
          >
            Clear all
          </Button>
        </Stack>
        <ul className="todo-list">
          {currentSort === "All"
            ? allTodos.map((item) => {
                return (
                  <LiComponent
                    completed={item.completed}
                    todoTitle={item.text}
                    description={item.description}
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
        <Footer setCurrentSort={setCurrentSort} />
      </section>
    </>
  );
};

export default MainSection;
