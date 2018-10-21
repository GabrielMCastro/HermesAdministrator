/*
 * DataManager.js creates a layer between React and the actual data source.
 * Allowing for easy swapping of the data source without messing with redux.
 */

import { actionTypes } from './reducers/ActionTypes'
import { 
    fetchBagsDB,
    fetchBagUpdatesDB,
    fetchScannersDB,
    updateScannerDB,
    fetchUserDB,
    fetchFlightsDB, 
} from './data/LiveDataSource'

export const newFlightSelected = (flightid) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.NEW_FLIGHT_SELECTED,
            payload: flightid,
        });
    };
};

export const newBagSelected = (bagid) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.NEW_BAG_SELECTED,
            payload: bagid,
        });
    };
};

export const fetchFlights = () => {
    return (dispatch) => {
        dispatch({ type: actionTypes.FETCH_FLIGHT_OBJECTS });

        // Fetching the flights
        fetchFlightsDB().then(flights => {
            dispatch({
                type: actionTypes.FETCH_FLIGHT_OBJECTS_SUCCESS,
                payload: flights,
            });
        }).catch(err => {
            dispatch({
                type: actionTypes.FETCH_FLIGHT_OBJECTS_FAIL,
                payload: err,
            });
        });
    };
};

// Fetching the bags in the server for a specific user
export const fetchBags = (userid) => {
    return (dispatch) => {
        dispatch({ 
            type: actionTypes.RESET_UI_BAGS,
            payload: userid,
        });
        
        dispatch({ type: actionTypes.FETCH_BAG_OBJECTS });

        // Fetching the bags
        fetchBagsDB(userid).then(bags => {
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
        fetchBagUpdatesDB(bagid).then(bag => {
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
        fetchScannersDB().then(scanners => {
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
        updateScannerDB(scannerid).then(updatedscanner => {
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
        fetchUserDB(userid).then(user => {
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