/*
 * DataManager.js creates a layer between React and the actual data source.
 * Allowing for easy swapping of the data source without messing with redux.
 */

import { actionTypes } from './reducers/ActionTypes'
import { 
    fetchBags,
    fetchBagUpdates,
    fetchScanners,
    updateScanner,
    fetchUser, 
} from './data/TestDataSource'


// Fetching the bags in the server
export const fetchBags = () => {
    return (dispatch) => {
        dispatch({ type: actionTypes.FETCH_BAG_OBJECTS });

        // Fetching the bags
        fetchBags().then(bags => {
            dispatch({
                type: actionTypes.FETCH_BAG_OBJECTS_SUCCESS,
                payload: bags,
            });
        }).catch(err => {
            dispatch({
                type: actionTypes.FETCH_BAG_OBJECTS_FAIL,
                payload: err,
            });
        });
    };
};

// Fetching the updates for a specific bag
export const fetchBagUpdates = (bagid) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.FETCH_BAG_UPDATE });

        // Fetching the updates
        fetchBagUpdates(bagid).then(bag => {
            dispatch({
                type: actionTypes.FETCH_BAG_UPDATE_SUCCESS,
                id: bagid,
                payload: bag,
            });
        }).catch(err => {
            dispatch({
                type: actionTypes.FETCH_BAG_UPDATE_FAIL,
                payload: err,
            });
        });
    };
};

// Fetching the scanner object
export const fetchScanners = () => {
    return (dispatch) => {
        dispatch({ type: actionTypes.FETCH_SCANNER_OBJECTS });

        // Fetching the scanner objects
        fetchScanners().then(scanners => {
            dispatch({
                type: actionTypes.FETCH_SCANNER_OBJECTS_SUCCESS,
                payload: scanners,
            });
        }).catch(err => {
            dispatch({
                type: actionTypes.FETCH_SCANNER_OBJECTS_FAIL,
                payload: err,
            });
        });
    };
};

// Updating a scanner object
export const updateScanner = (scannerid) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.UPDATE_SCANNER_OBJECT });

        // Updating the scanner object
        updateScanner(scannerid).then(updatedscanner => {
            dispatch({
                type: actionTypes.UPDATE_SCANNER_OBJECT_SUCCESS,
                id: scannerid,
                payload: updatedscanner,
            });
        }).catch(err => {
            dispatch({
                type: actionTypes.UPDATE_SCANNER_OBJECT_FAIL,
                payload: err,
            });
        });
    };
};

// Fetching a user object
export const fetchUserObject = (userid) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.FETCH_USER_OBJECT });

        // Fetching the user object
        fetchUser(userid).then(user => {
            dispatch({
                type: actionTypes.FETCH_USER_OBJECT_SUCCESS,
                payload: user,
            });
        }).catch(err => {
            dispatch({
                type: actionTypes.FETCH_USER_OBJECT_FAIL,
                payload: err,
            });
        });
    };
};