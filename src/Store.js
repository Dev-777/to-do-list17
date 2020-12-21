import { applyMiddleware, createStore } from "redux";
import { reducer } from "./Reducer/Reducer";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  reducer,
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
