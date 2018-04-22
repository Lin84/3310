import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

// components:
import Button from './../_common/Button';
import MainDisplay from './_parts/MainDisplay';
import MiniDisplay from './_parts/MiniDisplay';
import NumericButtons from './_parts/NumericButtons';

// action creators:
import {
    updateSelectedData,
    removeLastEnteredData,
    resetData,
    submitData
} from './../../redux/action-creators/mobile';

class Mobile extends Component {
    numericButtonsDefinition = [
        { label: '1 _', value: '' },
        { label: '2 abc', value: '2' },
        { label: '3 def', value: '3' },
        { label: '4 ghi', value: '4' },
        { label: '5 jkl', value: '5' },
        { label: '6 mno', value: '6' },
        { label: '7 pqrs', value: '7' },
        { label: '8 tuv', value: '8' },
        { label: '9 wxyz', value: '9' }
    ]

    handleClickSendButton = () => {
        if (this.props.selectedValue.length) {
            const endPoint = 'http://localhost:3310/';
            const data = this.props.selectedValue;
            this.props.submitData({ data, endPoint });
        } else {
            this.props.resetData();
        }
    }

    render() {
        const { results, selectedValue } = this.props;

        return (
            <div className="mobile__container">
                <MainDisplay results={results} />

                <div className="mobile__functional-buttons-wrapper">
                    <Button
                        customClass="btn mobile__cancel-button"
                        label="Cancel"
                        handleClick={this.props.removeLastEnteredData}
                    />

                    <MiniDisplay selectedValue={selectedValue.join('')} />

                    <Button
                        customClass="btn mobile__send-button"
                        label="Send"
                        handleClick={this.handleClickSendButton}
                    />
                </div>

                <div className="mobile__numeric-buttons-wrapper">
                    <NumericButtons
                        definitions={this.numericButtonsDefinition}
                        handleClick={this.props.updateSelectedData}
                    />
                </div>
            </div>
        );
    }
}

Mobile.propTypes = {
    submitData: PropTypes.func.isRequired,
    resetData: PropTypes.func.isRequired,
    removeLastEnteredData: PropTypes.func.isRequired,
    updateSelectedData: PropTypes.func.isRequired,
    results: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedValue: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default connect((state) => {
    const { mobile } = state;
    const { results, selectedValue } = mobile;
    return {
        results,
        selectedValue
    };
}, {
    updateSelectedData,
    removeLastEnteredData,
    resetData,
    submitData
})(Mobile);
