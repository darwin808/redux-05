import { combineReducers } from "redux";
import NamesReducer from "./NamesReducer";
import CounterReducer from "./CounterReducer";

const Allreducers = combineReducers({
  NamesReducer,
  CounterReducer,
});

export default Allreducers;
