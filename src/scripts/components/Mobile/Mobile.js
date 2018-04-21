import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// components:
import Button from './../_common/Button';
import MainDisplay from './_parts/MainDisplay';
import MiniDisplay from './_parts/MiniDisplay';
import NumericButtons from './_parts/NumericButtons';

class Mobile extends Component {
    state = {
        results: [],
        selectedValue: []
    }

    numericButtonsDefinition = [
        { label: '-', value: '' },
        { label: 'abc', value: '2' },
        { label: 'def', value: '3' },
        { label: 'ghi', value: '4' },
        { label: 'jkl', value: '5' },
        { label: 'mno', value: '6' },
        { label: 'pqrs', value: '7' },
        { label: 'tuv', value: '8' },
        { label: 'wxyz', value: '9' }
    ]

    handleClickCancelButton = () => {
        const { selectedValue } = this.state;
        const updatedSelectedValue = selectedValue.slice(0, -1);
        this.setState({
            selectedValue: updatedSelectedValue
        });
    }

    handleClickSendButton = () => {
        if (this.state.selectedValue.length) {
            const endpoint = 'http://localhost:3310/';
            const data = this.state.selectedValue;
            const method = 'post';

            axios({
                url: endpoint,
                method,
                data
            }).then((response) => {
                this.setState({
                    results: response.data
                });
            }).catch((error) => {
                console.error(error);
            });
        } else {
            this.setState({
                results: []
            });
        }
    }

    updateSelectedValue = (value) => {
        if (value) {
            const updatedSelectedValue = [...this.state.selectedValue, value];
            this.setState({
                selectedValue: updatedSelectedValue
            });
        }
    }

    render() {
        const { results, selectedValue } = this.state;

        return (
            <div className="mobile__container">
                <MainDisplay results={results} />

                <div className="mobile__functional-buttons-wrapper">
                    <Button
                        customClass="btn mobile__cancel-button"
                        label="Cancel"
                        handleClick={this.handleClickCancelButton}
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
                        handleClick={this.updateSelectedValue}
                    />
                </div>
            </div>
        );
    }
}

export default Mobile;
