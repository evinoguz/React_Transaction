export const createTransaction = (transaction) => {
  return { type: "CREATE_TRANSACTION", transaction };
};
export const updateTransaction = (id, updates) => {
  return { type: "UPDATE_TRANSACTION", id, updates };
};
export const deleteTransaction = (id) => {
  return {
    type: "DELETE_TRANSACTION",
    id,
  };
};
