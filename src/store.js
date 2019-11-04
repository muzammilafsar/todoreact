import { createStore, applyMiddleware  } from 'redux';
import {combineReducers} from 'redux';
import { middlewares } from './middlewares';
import todoReducer from './reducers/todo.reducer';

export const store = createStore(combineReducers({
    todo: todoReducer
}), applyMiddleware(...middlewares));
