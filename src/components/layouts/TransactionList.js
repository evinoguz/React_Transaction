import React from "react";
import TransactionSummary from "./TransactionSummary";
import { NavLink } from "react-router-dom";

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div>
      <br></br>
      <NavLink to="/create">
        {" "}
        <button className="waves-effect grey darken-4 btn right">
          <i className="material-icons">add</i>New Transaction
        </button>
      </NavLink>
      <table className="highlight">
        <thead>
          <tr>
            <th width="10%">ID</th>
            <th width="20%">Name</th>
            <th width="25%">Description</th>
            <th width="20%">Transaction Date</th>
            <th width="10%">Amount</th>
            <th width="15%"></th>
          </tr>
        </thead>
        {transactions &&
          transactions.map((transaction, key) => {
            return (
              <TransactionSummary
                transaction={transaction}
                key={transaction.id}
                deleteTransaction={deleteTransaction}
              ></TransactionSummary>
            );
          })}
      </table>
    </div>
  );
};
export default TransactionList;
