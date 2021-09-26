import { combineReducers } from 'redux';
import auth from "./reducers/auth";
import { connectRouter } from 'connected-react-router';


export default (history) => combineReducers({
    auth,
    router: connectRouter(history)
});