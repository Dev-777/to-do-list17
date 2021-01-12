import { put, takeLatest, call, all, select } from "redux-saga/effects";
import {
  LOAD_DATA,
  putData,
  CONFIRM_CONFIRM_MODAL,
  pushData,
  EDIT_MODAL_SAVE_BUTTON,
} from "../appActionsAndReducers/Actions";
import { getFunc } from "../../Api";
import axios from "axios";
import { watchSignUp } from "./signUpSaga/signUpSaga";
import { watchApproveSignUp } from "./approveSignUp/approveSignUpSaga";

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
      name: state.reducer.item.name,
      email: state.reducer.item.email,
      description: state.reducer.item.description,
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

/////////////////////////////////////////////////////////////////
function* workerUpdateData() {
  const state = yield select();
  yield axios
    .put(
      `https://5fe1946a04f0780017de9dfa.mockapi.io/AS/todo/${
        state.editModal.editableItemIndex + 1
      }`,
      {
        description: state.reducer.editModal.editModalDefaultValue,
      }
    )
    .then(() => console.log("put"));

  yield put(pushData());
}

function* watchUpdateData() {
  yield takeLatest(EDIT_MODAL_SAVE_BUTTON, workerUpdateData);
}

/////////////////////////////////////////////////////////////////

export function* rootSaga() {
  yield all([
    watchLoadData(),
    watchPushData(),
    watchUpdateData(),
    watchSignUp(),
    watchApproveSignUp(),
  ]);
}
