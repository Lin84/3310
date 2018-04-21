import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Mobile extends Component {
    state = {
        test: 'Mobile'
    }

    render() {
        return (
            <div>{this.state.test}</div>
        );
    }
}

export default Mobile;
