import { put, takeLatest, call, all, select } from "redux-saga/effects";
import { LOAD_DATA, putData, CONFIRM_CONFIRM_MODAL, pushData } from "./Actions";
import { getFunc } from "./Api";
import axios from "axios";

function* workerLoadData() {
  const data = yield call(() => getFunc());
  yield put(putData(data));
}

function* watchLoadData() {
  yield takeLatest(LOAD_DATA, workerLoadData);
}

function* workerPushData() {
  const state = yield select();
  yield axios
    .post("https://5fe1946a04f0780017de9dfa.mockapi.io/AS/todo", {
      withCredentials: true,
      name: state.item.name,
      email: state.item.email,
      description: state.item.description,
      status: "In progress",
    })
    .then(() => {
      console.log("post!");
    });

  yield put(pushData());
}

function* watchPushData() {
  yield takeLatest(CONFIRM_CONFIRM_MODAL, workerPushData);
}

export function* rootSaga() {
  yield all([watchLoadData(), watchPushData()]);
}
