import { combineReducers } from "redux";
import { signUpReducer } from "./signUp/reducer";
import { reducer } from "./appActionsAndReducers/Reducer/Reducer";
import { approveReducer } from "./approve/reducer";

export default combineReducers({
  reducer,
  signUpReducer,
  approveReducer,
});
