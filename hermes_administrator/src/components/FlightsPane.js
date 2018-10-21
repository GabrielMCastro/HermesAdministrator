import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchScanners, fetchFlights, newFlightSelected} from '../DataManager';
import '../styles/panes.css';

class FlightsPane extends Component {
    render() {
        return (
            <div className='paneBody'>
                <div className='header'>
                    <div className='paneHeader'>Flights</div>
                    <button id='update' onClick={this.fetchUpdate}>Refresh</button>
                </div>
                <div className='listContainer'>
                    {this.props.flights && this.props.flights.map(this.mapfunction)}
                </div>
            </div>
        );
    }

    fetchUpdate = () =>
    {
        this.props.fetchFlights()
        this.props.fetchScanners()
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
        fetchScanners: () => dispatch(fetchScanners()),
        newFlightSelected: (flightid) => dispatch(newFlightSelected(flightid)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightsPane);