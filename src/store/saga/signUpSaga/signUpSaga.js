import { put, takeLatest, select } from "redux-saga/effects";
import { POST_ISGN_UP, resetSignUpForm } from "../../signUp/actions";
import axios from "axios";

function* workerSignUp() {
  const state = yield select();
  yield axios
    .post("https://sign-up-backend.herokuapp.com/app/signup", {
      name: state.signUpReducer.fieldsValue.name,
      username: state.signUpReducer.fieldsValue.surname,
      email: state.signUpReducer.fieldsValue.email,
      password: state.signUpReducer.fieldsValue.password,
    })
    .then(() => console.log("post done~~"));

  yield put(resetSignUpForm());
}

export function* watchSignUp() {
  yield takeLatest(POST_ISGN_UP, workerSignUp);
}
