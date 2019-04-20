import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer from './reducers/index';

const composeEnhancers = composeWithDevTools({ realtime: true });

export default function configureStore() {
    return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(reduxThunk)),
    );
}
