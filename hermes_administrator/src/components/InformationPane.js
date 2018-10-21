import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/panes.css';

class InformationPane extends Component {
    render() {
        return (
            <div className='paneBody'>
                <div className='header'>
                    <div className='paneHeader'>Bag Information</div>
                </div>
                <div className='informationContainer'>
                    <p>Bag ID: {this.props.bag && this.props.bag.bag_id}</p>
                    <p>Bag's User ID: {this.props.bag && this.props.bag.user_id}</p>
                    <br/>
                    <p>Tracking</p>
                    <div className='listContainer'>
                        {this.props.bag && this.props.scanners.filter(
                                            scanner => (this.props.bag.scanners.includes(scanner.scanner_id)))
                                            .map(this.mapfunction)}
                    </div>
                </div>
            </div>
        );
    }

    mapfunction = scanner => {
        return (
        <div className='listItem'>
            <p className='listItemP2'>* { scanner.scanner_id } - { scanner.label }</p>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        bag: state.bags.bagValues.filter(bag => (bag.bag_id === state.bags.bagSelected))[0],
        scanners: state.scanners.scannerValues,
    };
};

export default connect(mapStateToProps)(InformationPane);