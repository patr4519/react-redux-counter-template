import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: ["todo 1", "todo 2", "todo 3"],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem(state, action) {
      state.push('test');
    },
  },
});

export const selectTodo = (state) => state.todo.item;

export const { addItem } = todoSlice.actions;

export default todoSlice.reducer;
