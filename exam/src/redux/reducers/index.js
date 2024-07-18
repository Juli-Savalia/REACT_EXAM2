import { combineReducers } from "redux";
import examReducer from "./examReducer";

let rootReducer = combineReducers({
  userlist: examReducer,
});

export default rootReducer;
