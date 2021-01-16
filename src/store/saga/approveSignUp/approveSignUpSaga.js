import { put, takeLatest, select } from "redux-saga/effects";
import axios from "axios";
import { POST_CODE, success } from "../../signUp/approveSignUp/actions";

function* workerApproveSignUp() {
  const state = yield select();
  yield axios
    .post("https://sign-up-backend.herokuapp.com/app/approve", {
      code: state.approveSignUpReducer.code,
    })
    .then(() => console.log("post done~~"));

  yield put(success());
}

export function* watchApproveSignUp() {
  yield takeLatest(POST_CODE, workerApproveSignUp);
}
