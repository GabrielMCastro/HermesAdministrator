import React, { Component } from 'react';
import FlightsPane from './components/FlightsPane';
import UsersPane from './components/UsersPane';
import BagsPane from './components/BagsPane';
import InformationPane from './components/InformationPane';
import Header from './components/Header';
import { connect } from 'react-redux';
import { fetchFlights, fetchScanners} from './DataManager';
import './styles/main.css';

class AppRoot extends Component {
    constructor(props)
    {   
        super(props)
        this.props.fetchFlights()
        this.props.fetchScanners()
    }

    render() {
        return(
            <div>
                <Header/>
                <div className='App'>
                    <FlightsPane className='Pane'/>
                    <UsersPane className='Pane'/>
                    <BagsPane className='Pane'/>
                    <InformationPane className='Pane'/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFlights: () => dispatch(fetchFlights()),
        fetchScanners: () => dispatch(fetchScanners()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRoot);