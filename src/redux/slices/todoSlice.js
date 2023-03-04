import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      text: "Todo 1",
      completed: false,
    },
    {
      text: "Todo 2",
      completed: false,
    },
    {
      text: "Todo 3",
      completed: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem(state, action) {
      if (action.payload.text === '') {
        alert('Input what need to do!');
        return;
      };
      if(state.items.find(item => item.text === action.payload.text)) {
        alert('Todo name must be uniq!');
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
      state.items = state.items.map(todo => todo.text === action.payload ? {...todo, completed: !todo.completed} : todo)
    }
  },
});

export const selectTodo = (state) => state.todo;

export const { addItem, clearItems, removeItem, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;
