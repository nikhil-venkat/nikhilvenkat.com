import { createStore, combineReducers } from "redux";
import { themeReducer } from '../reducers/themeReducer';

export const store = createStore(combineReducers({
  theme: themeReducer,
}));
