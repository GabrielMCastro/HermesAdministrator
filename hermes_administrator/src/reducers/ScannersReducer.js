import { actionTypes } from './ActionTypes'

// Initial State for the bags
const SCANNERS_INITIAL_STATE = {
    scannerValues: [],
    isFetchingScanners: false,
    isUpdatingScanner: false,
};

export const bagsReducer = (state = SCANNERS_INITIAL_STATE, action) =>
{
    switch(action.type)
    {
        /* Fetching Scanners */
        case actionTypes.FETCH_SCANNER_OBJECTS:
            return{
                ...state,
                isFetchingScanners: true,
            };
        case actionTypes.FETCH_SCANNER_OBJECTS_SUCCESS:
            return{
                ...state,
                scannerValues: action.payload,
                fetchingScannerSuccess: true,
                isFetchingScanners: false,
            };
        case actionTypes.FETCH_SCANNER_OBJECTS_FAIL:
            return{
                ...state,
                fetchingScannerSuccess: false,
                isFetchingScanners: false,
            };

        /* Fetch Bag Update */
        case actionTypes.UPDATE_SCANNER_OBJECT:
            return{
                ...state,
                isUpdatingScanner: true,
            };
        case actionTypes.UPDATE_SCANNER_OBJECT_SUCCESS:
            return{
                ...state,
                scannerValues: state.scannerValues.filter(scanner => (scanner.guid !== action.id)).concat([action.payload]),
                updatingScannerSuccess: true,
                isUpdatingScanner: false,
            };
        case actionTypes.UPDATE_SCANNER_OBJECT_FAIL:
            return{
                ...state,
                updatingScannerSuccess: false,
                isUpdatingScanner: false,
            };

        default:
            return state
    }
};