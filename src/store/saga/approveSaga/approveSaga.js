import { put, takeLatest, select } from "redux-saga/effects";
import axios from "axios";
import { POST_CODE, successMessage } from "../../reducers/approve/actions";

function* workerApprove() {
  const state = yield select();
  yield axios
    .post("https://sign-up-backend.herokuapp.com/app/approve", {
      code: state.approveReducer.code,
    })
    .then(() => console.log("post done~~"));

  yield put(successMessage());
}

export function* watchApprove() {
  yield takeLatest(POST_CODE, workerApprove);
}
