import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// components:
import Button from './../../../_common/Button';

const MiddleBody = (props) => {
    return (
        <Fragment>
            <Button
                customClass="btn mobile__cancel-button"
                label="Cancel"
                handleClick={props.removeLastEnteredData}
            />

            <div className="mobile__mini-display">{props.selectedValue}</div>

            <Button
                customClass="btn mobile__send-button"
                label="Send"
                handleClick={props.handleClickSendButton}
            />
        </Fragment>
    );
};

MiddleBody.propTypes = {
    selectedValue: PropTypes.string.isRequired,
    removeLastEnteredData: PropTypes.func.isRequired,
    handleClickSendButton: PropTypes.func.isRequired
};

export default MiddleBody;
