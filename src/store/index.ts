import {createStore, applyMiddleware} from 'redux'
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    thunk
  ))
)

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch;

export default store;