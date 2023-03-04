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
    removeItem(state, action) {
      state.item = state.item.filter(todo => todo !== action.payload)
    },
    clearItems(state) {
      state.item = [];
    }
  },
});

export const selectTodo = (state) => state.todo.item;

export const { addItem, clearItems, removeItem } = todoSlice.actions;

export default todoSlice.reducer;
