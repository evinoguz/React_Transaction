import React from "react";
import { NavLink } from "react-router-dom";
const TransactionSummary = ({ transaction, deleteTransaction }) => {
  return (
    <tbody>
      <tr>
        <td width="10%">{transaction.id}</td>
        <td width="20%">{transaction.name}</td>
        <td width="25%">{transaction.description}</td>
        <td width="20%">{transaction.date}</td>
        <td width="10%">
          {transaction.currency}
          {transaction.amount}
        </td>
        <td width="15%">
          <NavLink to={"/update/" + transaction.id}>
            <button className="waves-effect cyan darken-3 btn">
              <i className="material-icons">edit</i>{" "}
            </button>
          </NavLink>
          <button className="waves-effect red darken-4 btn">
            <i
              className="material-icons"
              onMouseDown={() => deleteTransaction(transaction.id)}
            >
              delete
            </i>{" "}
          </button>
        </td>
      </tr>
    </tbody>
  );
};
export default TransactionSummary;
