import { combineReducers } from 'redux';
import auth from "./reducers/auth";
import newtask from "./reducers/newtask";
import { connectRouter } from 'connected-react-router';


export default (history) => combineReducers({
    auth,
    newtask,
    router: connectRouter(history)
});
