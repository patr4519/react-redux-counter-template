import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: ["Todo 1", "Todo 2", "Todo 3"],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem(state, action) {
      state.item.push(action.payload);
    },
  },
});

export const selectTodo = (state) => state.todo.item;

export const { addItem } = todoSlice.actions;

export default todoSlice.reducer;
