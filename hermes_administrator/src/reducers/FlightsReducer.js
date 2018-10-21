import { actionTypes } from './ActionTypes'

// Initial State for the bags
const FLIGHTS_INITIAL_STATE = {
    flightValues: [],
    flightSelected: '',
    isFetchingFlights: false,
};

export const flightsReducer = (state = FLIGHTS_INITIAL_STATE, action) =>
{
    switch(action.type)
    {
        /* Fetching Flights */
        case actionTypes.FETCH_FLIGHT_OBJECTS:
            return{
                ...state,
                isFetchingFlights: true,
            };
        case actionTypes.FETCH_FLIGHT_OBJECTS_SUCCESS:
            return{
                ...state,
                flightValues: action.payload,
                fetchingFlightsSuccess: true,
                isFetchingFlights: false,
            };
        case actionTypes.FETCH_FLIGHT_OBJECTS_FAIL:
            return{
                ...state,
                fetchingFlightsSuccess: false,
                isFetchingFlights: false,
            };

        case actionTypes.NEW_FLIGHT_SELECTED:
            return{
                ...state,
                flightSelected: action.payload,
            }

        default:
            return state
    }
};