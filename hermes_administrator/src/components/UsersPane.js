import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBags } from '../DataManager';
import '../styles/panes.css';

class UsersPane extends Component {
    render() {
        return (
            <div className='paneBody'>
                <div className='header'>
                    <div className='paneHeader'>Users</div>
                </div>
                <div className='listContainer'>
                    {this.props.users && this.props.users.users.map(this.mapfunction)}
                </div>
            </div>
        );
    }

    mapfunction = user => {
        return (
        <div className='listItem' onClick={() => this.props.fetchBags(user)}>
            <p className='listItemP1'>{user}</p>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        bags: state.bags.bagValues,
        users: state.flights.flightValues.filter(flight => (flight.flight_id === state.flights.flightSelected))[0],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBags: (userid) => dispatch(fetchBags(userid)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPane);