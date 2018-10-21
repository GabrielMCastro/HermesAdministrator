import React, { Component } from 'react';
import '../styles/header.css'
export default class Header extends Component {
    render() {
        return(
            <div className='Header'>
                <img id='logo' src={require('../imgs/logo.png')}/>
            </div>
        );
    }
}