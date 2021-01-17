import { combineReducers } from "redux";
import { signUpReducer } from "./signUp/reducer";
import { reducer } from "./appActionsAndReducers/Reducer/Reducer";
import { approveReducer } from "./approve/reducer";
import { headerReducer } from "./header/reducer";
import { signInReducer } from "./signIn/reducer";

export default combineReducers({
  reducer,
  approveReducer,
  headerReducer,
  signUpReducer,
  signInReducer,
});
