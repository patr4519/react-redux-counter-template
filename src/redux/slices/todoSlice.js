import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: ['Todo 1'],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem(state, action) {
      state.item.push(action.payload);
    },
    clearItems(state) {
      state.item = [];
    }
  },
});

export const selectTodo = (state) => state.todo.item;

export const { addItem, clearItems } = todoSlice.actions;

export default todoSlice.reducer;
