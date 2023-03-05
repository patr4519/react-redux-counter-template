import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LiComponent from "./LiComponent";
import { addItem, clearItems } from "../redux/slices/todoSlice";
import { selectTodo } from "../redux/slices/todoSlice";
import Footer from "./Footer";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const ariaLabel = { "aria-label": "description" };

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
      <div className="form__group">
        <input
          type="text"
          className="form__input"
          id="name"
          placeholder="What needs to do?"
          value={inputValue}
          ref={inputRef}
          onChange={inputHandler}
        />
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
