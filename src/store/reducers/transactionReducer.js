const initState = {
  transactions: [],
};
const transactionReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_TRANSACTION":
      console.log("Transaction Created", action.transaction);
      const last = state.transactions[state.transactions.length - 1];
      let num = 0;
      if (!last) num = 1;
      else num = last.id + 1;
      return {
        ...state,
        transactions: [
          ...state.transactions,
          { ...action.transaction, id: num },
        ],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (item) => item.id !== action.id
        ),
      };
    case "UPDATE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.map((item) =>
          item.id === action.id ? { ...action.updates, id: item.id } : item
        ),
      };
    default:
      return state;
  }
};
export default transactionReducer;
