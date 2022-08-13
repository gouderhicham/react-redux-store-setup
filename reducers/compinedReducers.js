import { combineReducers } from "redux";
import { reducer1 } from "./reducer1";
import { reducer2 } from "./reducer2";
export const reducers = combineReducers({
  data_state_1: reducer1 ,
  data_state_2 : reducer2 // no function call just it's name no () 
});
