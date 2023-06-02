import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenesesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

export default function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");
  const yearChangeHandler = (year) => {
    setFilterYear(year);
    console.log(`Year in Expenses: ${year}`);
  };

  const filteredExpenses = props.expensesDataArray.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear.toString()
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onYearChange={yearChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenesesList items={filteredExpenses} />
      </Card>
    </li>
  );
}
