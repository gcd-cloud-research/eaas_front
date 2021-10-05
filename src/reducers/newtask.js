import { MODEL_TYPE_SELECTED } from "../constants/actionTypes";

const store =  (state = {}, action) => {
    switch (action.type)
    {
        case MODEL_TYPE_SELECTED:
        {
            return {
                ...state,
                type: action.payload.type
            };
        }
        default:
            return state;
    }
};

export default store;
