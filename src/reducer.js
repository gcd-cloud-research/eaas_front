import { combineReducers } from 'redux';
import auth from "./reducers/auth";
import newtask from "./reducers/newtask";
import modelfiles from "./reducers/modelfiles";
import { connectRouter } from 'connected-react-router';


const reducer =  (history) => combineReducers({
    auth,
    newtask,
    modelfiles,
    router: connectRouter(history)
});

export default reducer;
