import { put, takeLatest, call, all } from "redux-saga/effects";
import {
  LOAD_DATA,
  confirmConfirmModal,
  putData,
  CONFIRM_CONFIRM_MODAL,
} from "./Actions";
import { getFunc, postFunc } from "./Api";

function* workerLoadData() {
  const data = yield call(() => getFunc());
  yield put(putData(data));
}

function* watchLoadData() {
  yield takeLatest(LOAD_DATA, workerLoadData);
}

function* workerPushData() {
  const data = yield call(() => postFunc());
  yield put(putData(data));
}

function* watchPushData() {
  yield takeLatest(CONFIRM_CONFIRM_MODAL, workerPushData);
}

export function* rootSaga() {
  yield all([watchLoadData(), watchPushData()]);
}
