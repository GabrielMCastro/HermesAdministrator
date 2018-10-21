import { actionTypes } from './ActionTypes'

// Initial State for the bags
const USER_INITIAL_STATE = {
    userValues: [],
    isFetchingUser: false,
};

export const userReducer = (state = USER_INITIAL_STATE, action) =>
{
    switch(action.type)
    {
        /* Fetching User */
        case actionTypes.FETCH_USER_OBJECT:
            return{
                ...state,
                isFetchingUser: true,
            };
        case actionTypes.FETCH_USER_SUCCESS:
            return{
                ...state,
                userValues: state.userValues.concat([action.payload]),
                fetchingUserSuccess: true,
                isFetchingUser: false,
            };
        case actionTypes.FETCH_BAG_OBJECTS_FAIL:
            return{
                ...state,
                fetchingUserSuccess: false,
                isFetchingUser: false,
            };

        default:
            return state
    }
};