import { useState } from "react";

import { Card } from "react-bootstrap";
import "./ExpenseItem.css";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../redux/expenseSlice";
import { updateExpense } from "../redux/expenseSlice";

const ExpenseItem = ({ id, name, cost }) => {
  const [expenseEditing, setExpenseEditing] = useState(null);
  const [expenseTextEditing, setExpenseTextEditing] = useState("");
  const [expenseCostEditing, setExpenseCostEditing] = useState("");
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteExpense({ id: id }));
  };

  const submitEditHandler = (itemIndex, exName, exCost) => {
    // console.log(itemIndex, exName, exCost);
    if (id === itemIndex) {
      dispatch(
        updateExpense({
          name: exName,
          cost: exCost,
          id: id
        })
      );
      setExpenseEditing("");
    }
  };

  return (
    <>
      <div className="col-12 listoutput">
        <Card className="card text-center">
          <ul className="list">
            <div id="expenselist" className="col-12 list-group-item my-1">
              <div id="name_cost" className="col-10">
                {/* EXPENSE NAME EDITING */}
                <div id="name_" className="col">
                  {expenseEditing === ExpenseItem.id ? (
                    <input
                      data-testid="exptxtedit"
                      type="text"
                      onChange={(e) => {
                        setExpenseTextEditing(e.target.value);
                      }}
                      value={expenseTextEditing}
                    ></input>
                  ) : (
                    <b>{name}</b>
                  )}
                </div>

                {/* EXPENSE COST EDITING */}
                <div id="cost_" className="col">
                  {expenseEditing === ExpenseItem.id ? (
                    <input
                      data-testid="costtxtedit"
                      type="number"
                      onChange={(e) => {
                        setExpenseCostEditing(e.target.value);
                      }}
                      value={expenseCostEditing}
                    ></input>
                  ) : (
                    <b>{cost}</b>
                  )}
                </div>
              </div>

              {/* BUTTONS */}

              <div className="col-2 buttons">
                {/* DELETE BUTTON */}
                <button
                  onClick={handleDeleteClick}
                  className="btn btn-danger btn-sm btns"
                >
                  Delete
                </button>
                {/* SUBMIT AND EDIT BUTTONS */}
                {expenseEditing === ExpenseItem.id ? (
                  <button
                    onClick={() =>
                      submitEditHandler(
                        id,
                        expenseTextEditing,
                        expenseCostEditing
                      )
                    }
                    className="btn btn-success btn-sm btns"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setExpenseEditing(ExpenseItem.id);
                      setExpenseTextEditing(name);
                      setExpenseCostEditing(cost);
                    }}
                    className="btn btn-warning btn-sm btns"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          </ul>
        </Card>
      </div>
    </>
  );
};

export default ExpenseItem;
