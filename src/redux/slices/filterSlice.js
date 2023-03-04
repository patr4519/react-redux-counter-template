
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: []
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    selectAll(state, action) {
        console.log('all')
    },
    selectActive(state, action) {
        console.log('all')
    },
    selectCompleted(state, action) {
        console.log('all')
    },
  },
});

// export const selectTodo = (state) => state.todo.item;

export const { selectAll, selectActive, selectCompleted } = filterSlice.actions;

export default filterSlice.reducer;
