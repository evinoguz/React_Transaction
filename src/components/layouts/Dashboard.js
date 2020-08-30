import React, { Component } from "react";
import TransactionList from "./TransactionList";
import { connect } from "react-redux";
import { deleteTransaction } from "../../store/actions/transactionActions";
class Deshboard extends Component {
  state = { transactions: [] };
  static getDerivedStateFromProps(props) {
    return {
      transactions: props.transactions,
    };
  }
  componentDidMount() {}
  render() {
    // console.log(this.props)
    const { transactions } = this.state;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m1"> </div>

          <div className="col s12 m10 offset-m1">
            <TransactionList
              transactions={transactions}
              deleteTransaction={this.props.deleteTransaction}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    transactions: state.transaction.transactions,
  };
};
const mapDispatchToProps = (dispatch) => ({
  deleteTransaction: (id) => dispatch(deleteTransaction(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Deshboard);
