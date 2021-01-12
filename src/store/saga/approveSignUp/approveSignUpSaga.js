import { put, takeLatest, select } from "redux-saga/effects";
import { resetSignUpForm } from "../../signUp/actions";
import axios from "axios";
import { POST_CODE } from "../../signUp/approveSignUp/actions";

function* workerApproveSignUp() {
  const state = yield select();
  yield axios
    .post("https://sign-up-backend.herokuapp.com/app/approve", {
      code: state.approveSignUpReducer.code,
    })
    .then(() => console.log("post done~~"));

  yield put(resetSignUpForm());
}

export function* watchApproveSignUp() {
  yield takeLatest(POST_CODE, workerApproveSignUp);
}
