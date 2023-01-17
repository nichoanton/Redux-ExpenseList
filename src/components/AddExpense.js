import { useState } from "react";
import ErrorModal from "./UI/ErrorModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddExpense.css";

import { useDispatch } from "react-redux";
import { addExpense } from "../redux/expenseSlice";

const AddExpense = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [error, setError] = useState();

  const dispatch = useDispatch();

  const expensenameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const costChangeHandler = (event) => {
    setCost(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (name.trim().length === 0 || cost.trim().length === 0) {
      setError({
        errorTitle: "Invalid",
        errorMessage: "Inputs Expense name/cost cannot be empty"
      });
    } else {
      dispatch(
        addExpense({
          name: name,
          cost: cost
        })
      );
    }

    setName("");
    setCost("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          errorTitle={error.errorTitle}
          errorMessage={error.errorMessage}
          onOkay={errorHandler}
        />
      )}
      <form onSubmit={onSubmit}>
        <h3 className="text-center">Expense List</h3>
        <div className="row">
          <div id="listupdate" className="col-lg m-2">
            <label for="name" className="mx-2">
              <em>Expense Name:</em>
            </label>
            <input
              data-testid="Expname"
              id="name"
              className="form-control"
              type="text"
              value={name}
              onChange={expensenameChangeHandler}
            ></input>
          </div>
          <div id="listupdate" className="col-lg m-2">
            <label for="cost" className="mx-2">
              <em>Cost:</em>
            </label>
            <input
              data-testid="Expcost"
              id="cost"
              class="form-control"
              type="number"
              pattern="[0-9]*"
              value={cost}
              onChange={costChangeHandler}
            ></input>
          </div>
          <div className="bt-con col-lg m-2">
            <button
              className="btn btn-primary"
              type="submit"
              data-testid="buttonbtn"
            >
              Add Expense
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddExpense;
