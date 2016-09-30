import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import main from './component/main/reducer';

export default function store(initialState) {
  return createStore(
    combineReducers({
      main
    }),
    initialState,
    applyMiddleware(thunk)
  );
}
