import { put, takeLatest, call, all, select } from "redux-saga/effects";
import { LOAD_DATA, putData, CONFIRM_CONFIRM_MODAL, pushData } from "./Actions";
import { getFunc, postFunc } from "./Api";

function* workerLoadData() {
  const data = yield call(() => getFunc());
  yield put(putData(data));
}

function* watchLoadData() {
  yield takeLatest(LOAD_DATA, workerLoadData);
}

function* workerPushData() {
  const state = yield select();
  postFunc(state);
  yield put(pushData());
}

function* watchPushData() {
  yield takeLatest(CONFIRM_CONFIRM_MODAL, workerPushData);
}

export function* rootSaga() {
  yield all([watchLoadData(), watchPushData()]);
}
