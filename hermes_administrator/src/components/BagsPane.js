import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newBagSelected } from '../DataManager';
import '../styles/panes.css';

class BagsPane extends Component {
    render() {
        return (
            <div className='paneBody'>
                <div className='header'>
                    <div className='paneHeader'>Bags</div>
                </div>
                <div className='listContainer'>
                    {this.props.bags && this.props.bags.map(this.mapfunction)}
                </div>
            </div>
        );
    }

    mapfunction = bag => {
        return (
        <div className='listItem' onClick={() => this.props.newBagSelected(bag.bag_id)}>
            <p className='listItemP1'>{bag.bag_id}</p>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        bags: state.bags.bagValues,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        newBagSelected: (bagid) => dispatch(newBagSelected(bagid)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BagsPane);