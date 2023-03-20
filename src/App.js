import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <Container
      className="my-3"
      style={{ backgroundColor: "antiquewhite" }}
    >
      <AddExpense />
      <ExpenseList />
    </Container>
  );
}

export default App;
