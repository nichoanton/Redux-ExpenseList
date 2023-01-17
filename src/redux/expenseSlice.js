import { createSlice } from "@reduxjs/toolkit";

const date = new Date();

const expenseSlice = createSlice({
  name: "expenses",
  initialState: [
    { id: 1, name: "Bank", cost: "1000" },
    { id: 2, name: "Cake", cost: "300" },
    { id: 3, name: "Food", cost: "700" }
  ],

  reducers: {
    addExpense: (state, action) => {
      const newExpense = {
        id: date.setHours(0, 0, 0, 0),
        name: action.payload.name,
        cost: action.payload.cost
      };
      state.push(newExpense);
    },
    deleteExpense: (state, action) => {
      return state.filter((expense) => expense.id !== action.payload.id);
    },
    updateExpense: (state, action) => {
      state.map((v, i) => {
        if (v.id === action.payload.id) {
          state[i] = {
            id: v.id,
            name: action.payload.name,
            cost: action.payload.cost
          };
        }
      });
    }
  }
});

export const {
  addExpense,
  deleteExpense,
  updateExpense
} = expenseSlice.actions;

export default expenseSlice.reducer;
