import transactionReducer from "./transactionReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  transaction: transactionReducer,
});
export default rootReducer;
