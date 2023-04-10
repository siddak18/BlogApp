import {applyMiddleware, combineReducers, createStore} from 'redux';
import { POST } from './Reducer/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const reducer=combineReducers({
    POST:POST
});
const middleware=[thunk];
const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default  store