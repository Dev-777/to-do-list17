import { applyMiddleware, createStore } from "redux";
import { reducer } from "../store/appActionsAndReducers/Reducer/Reducer";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import { rootSaga } from "./saga/sagas";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  reducer,
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
