
import "@testing-library/jest-dom";
import reducer, {addExpense} from "../../redux/expenseSlice";

const date = new Date();

describe("AddExpense", () => {
  afterEach(cleanup);

  test("Should render initial state", () => {
    expect(reducer(undefined, {})).toEqual([
      { id: 1, name: "Bank", cost: "1000" },
      { id: 2, name: "Cake", cost: "300" },
      { id: 3, name: "Food", cost: "700" },
    ]);
  });
  
  test("Should add expense to an existing list", () => {
    const previousState = [{ id: 3, name: "Food", cost: "700" }];
    expect(
      reducer(
        previousState,
        addExpense({id: date.setHours(0, 0, 0, 0), name: "Car", cost: "1000" })
      )
    ).toEqual([
      { id: 3, name: "Food", cost: "700" },
      {
        id: date.setHours(0, 0, 0, 0),
        name: "Car",
        cost: "1000"
      }
    ]);
  });

  
})



