import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createTransaction, updateTransaction, } from "../../store/actions/transactionActions";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
// export interface IProps{
//   transaction:ITransaction;
// }
class CreateTransaction extends Component {
  state = { name: "", description: "", date: "", amount: "", currency: "" };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    const { history } = this.props;
    e.preventDefault();
    const match = this.props.match;
    if (
      match &&
      match.params &&
      match.path === "/update/:id" &&
      match.params.id &&
      match.params.id !== ""
    ) { this.props.updateTransaction(this.state) }
    
    else {
      this.props.createTransaction(this.state);
    }
    history.push("/");
  };
  componentDidMount() {
    const match = this.props.match;
    if (
      match &&
      match.params &&
      match.path === "/update/:id" &&
      match.params.id &&
      match.params.id !== ""
    ) {
      const transaction = this.props.transactions.find(
        (item) => item.id === parseInt(match.params.id)
      );
      this.setState(transaction);
    }
  }
  render() {
    return (
      <div className="container">
        <NavLink to="/">
        {" "}
         Transaction List
      </NavLink>
        <form onSubmit={this.handleSubmit} className="white">
       
          <h4 className="grey-text text-darken-3 center">Transaction Create</h4>

          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={this.handleChange}
              value={this.state.name}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="description">Description</label>
            <textarea
              rows="4"
              cols="50"
              id="description" 
              className="materialize-textarea"
              data-length="120"
              onChange={this.handleChange}
              value={this.state.description}
            ></textarea>
          </div>
          <div className="input-field">
            Date <label htmlFor="date"></label>
            <input
              type="date"
              id="date"
              onChange={this.handleChange}
              value={this.state.date}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              id="amount"
              onChange={this.handleChange}
              value={this.state.amount}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="currency">Currency</label>
            <input
              type="text"
              id="currency"
              onChange={this.handleChange}
              value={this.state.currency}
            ></input>
          </div>
          <div className="input-field">
            <button className="btn teal lighten-1 z-depth-0">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    transactions: state.transaction.transactions,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createTransaction: (transaction) =>
      dispatch(createTransaction(transaction)),
    updateTransaction: (transaction) =>
      dispatch(updateTransaction(transaction.id, transaction)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateTransaction));
