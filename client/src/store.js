import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';

export default function configureStore(initialState = {}) {
    return createStore(
        rootReducer,
        applyMiddleware(reduxThunk)
    );
}