import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components:
import Button from './../_common/Button';
import MainDisplay from './_parts/MainDisplay';
import MiniDisplay from './_parts/MiniDisplay';
import NumericButtons from './_parts/NumericButtons';

class Mobile extends Component {
    state = {
        results: ['display', 'reulst', 'static', 'data'],
        selectedValue: ['2', '3']
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

    render() {
        const { results, selectedValue } = this.state;

        return (
            <div className="mobile__container">
                <MainDisplay results={results} />

                <div className="mobile__functional-buttons-wrapper">
                    <Button
                        customClass="btn mobile__cancel-button"
                        label="Cancel"
                        handleClick={() => console.log('Click cancel button')}
                    />

                    <MiniDisplay selectedValue={selectedValue} />

                    <Button
                        customClass="btn mobile__send-button"
                        label="Send"
                        handleClick={() => console.log('Click send button')}
                    />
                </div>

                <div className="mobile__numeric-buttons-wrapper">
                    <NumericButtons definitions={this.numericButtonsDefinition} />
                </div>
            </div>
        );
    }
}

export default Mobile;
