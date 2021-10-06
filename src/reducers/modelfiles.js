import { MODEL_FILE_ADDED, MODEL_FILE_REMOVED } from "../constants/actionTypes";

function reducer(state = [], action) {
    switch (action.type)
    {
        case MODEL_FILE_ADDED:
        {
            return [
                ...state,
                {
                    name: action.payload.name,
                    contents: action.payload.contents
                }
            ];
        }
        case MODEL_FILE_REMOVED:
        {
            return state.filter((item, index) => index !== action.payload.index);
        }
        default:
            return state;
    }
}

export default reducer;
