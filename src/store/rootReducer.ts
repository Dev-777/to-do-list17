import { combineReducers } from "redux";
import { signUpReducer } from "./signUp/reducer";
import { reducer } from "./appActionsAndReducers/Reducer/Reducer";
import { approveSignUpReducer } from "./signUp/approveSignUp/reducer";

export default combineReducers({
  reducer,
  signUpReducer,
  approveSignUpReducer,
});
