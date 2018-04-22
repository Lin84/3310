import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

// components:
import Button from './../_common/Button';
import MainDisplay from './_parts/MainDisplay';
import MiddleBody from './_parts/MiddleBody';
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
        const { selectedValue, submitData, resetData } = this.props;

        if (selectedValue.length) {
            const endpoint = 'http://localhost:3310/';
            const data = selectedValue;
            submitData({ data, endpoint });
        } else {
            resetData();
        }
    }

    handleClickNumericButton = (value) => {
        if (value !== '') {
            this.props.updateSelectedData(value);
        }
    }

    render() {
        const {
            results,
            selectedValue,
            removeLastEnteredData,
            updateSelectedData
        } = this.props;

        return (
            <div className="mobile__container">
                <MainDisplay results={results} />

                <div className="mobile__middle-body-wrapper">
                    <MiddleBody
                        removeLastEnteredData={removeLastEnteredData}
                        handleClickSendButton={this.handleClickSendButton}
                        selectedValue={selectedValue.join('')}
                    />
                </div>

                <div className="mobile__numeric-buttons-wrapper">
                    <NumericButtons
                        definitions={this.numericButtonsDefinition}
                        handleClick={this.handleClickNumericButton}
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
