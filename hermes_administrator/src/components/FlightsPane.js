import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFlights, newFlightSelected} from '../DataManager';
import '../styles/panes.css';

class FlightsPane extends Component {
    render() {
        return (
            <div className='paneBody'>
                <div className='header'>
                    <div className='paneHeader'>Flights</div>
                    <button id='update' onClick={this.props.fetchFlights}>Refresh</button>
                </div>
                <div className='listContainer'>
                    {this.props.flights && this.props.flights.map(this.mapfunction)}
                </div>
            </div>
        );
    }

    mapfunction = flight => {
        return (
        <div className='listItem' onClick={() => this.props.newFlightSelected(flight.flight_id)}>
            <p className='listItemP1'>{flight.flight_id}</p>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        flights: state.flights.flightValues,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFlights: () => dispatch(fetchFlights()),
        newFlightSelected: (flightid) => dispatch(newFlightSelected(flightid)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightsPane);