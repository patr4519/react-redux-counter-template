import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      text: "Магазин",
      completed: false,
      description: "Сходить в магазин за продуктами",
    },
    {
      text: "Еда",
      completed: false,
      description: "Приготовить еду",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem(state, action) {
      if (action.payload.text === "") {
        alert("Input what need to do!");
        return;
      }
      if (state.items.find((item) => item.text === action.payload.text)) {
        alert("Todo name must be uniq!");
        return;
      }
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter((todo) => todo.text !== action.payload);
    },
    clearItems(state) {
      state.items = [];
    },
    completeTodo(state, action) {
      state.items = state.items.map((todo) =>
        todo.text === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    selectActive(state) {
      state.items = state.items.filter((todo) => todo.completed !== true);
    },
    selectCompleted(state) {
      state.items = state.items.filter((todo) => todo.completed !== false);
    },
    editDesctiption(state, action) {
      state.items = state.items.map((todo) => {
        return todo.text === action.payload.todoTitle
          ? { ...todo, description: action.payload.inputField }
          : todo;
      });
    },
  },
});

export const selectTodo = (state) => state.todo;

export const {
  addItem,
  clearItems,
  removeItem,
  completeTodo,
  selectActive,
  selectCompleted,
  editDesctiption,
} = todoSlice.actions;

export default todoSlice.reducer;
