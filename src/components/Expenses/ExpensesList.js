import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpenesesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => ExpenseItem(item))}
    </ul>
  );
}
