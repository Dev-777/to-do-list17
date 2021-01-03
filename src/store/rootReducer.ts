import { combineReducers } from 'redux';
import {signUpReducer} from './signUp/reducer';
import {reducer} from './appActionsAndReducers/Reducer/Reducer'

export default combineReducers({
   reducer,
   signUpReducer,
})