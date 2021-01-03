import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import { rootSaga } from "./saga/sagas";

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
