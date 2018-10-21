import { actionTypes } from './ActionTypes'

// Initial State for the bags
const BAGS_INITIAL_STATE = {
    bagValues: [],
    isFetchingBags: false,
    isUpdatingBag: false,
};

export const bagsReducer = (state = BAGS_INITIAL_STATE, action) =>
{
    switch(action.type)
    {
        /* Fetching Bags */
        case actionTypes.FETCH_BAG_OBJECTS:
            return{
                ...state,
                isFetchingBags: true,
            };
        case actionTypes.FETCH_BAG_OBJECTS_SUCCESS:
            return{
                ...state,
                bagsValues: action.payload,
                fetchingBagsSuccess: true,
                isFetchingBags: false,
            };
        case actionTypes.FETCH_BAG_OBJECTS_FAIL:
            return{
                ...state,
                fetchingBagsSuccess: false,
                isFetchingBags: false,
            };

        /* Fetch Bag Update */
        case actionTypes.FETCH_BAG_UPDATE:
            return{
                ...state,
                isUpdatingBag: true,
            };
        case actionTypes.FETCH_BAG_UPDATE_SUCCESS:
            return{
                ...state,
                bagsValues: state.bagValues.filter(bag => (bag.guid !== action.id)).concat([action.payload]),
                updatingBagSuccess: true,
                isUpdatingBag: false,
            };
        case actionTypes.FETCH_BAG_UPDATE_FAIL:
            return{
                ...state,
                updatingBagSuccess: false,
                isUpdatingBag: false,
            };

        default:
            return state
    }
};