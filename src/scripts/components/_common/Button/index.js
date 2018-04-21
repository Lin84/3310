import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button
            className={`btn ${props.customClass}`}
            onClick={props.handleClick}
        >
            { props.label }
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    customClass: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Button;
