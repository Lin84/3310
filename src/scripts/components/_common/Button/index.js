import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button
            className={`btn ${props.class}`}
            onClick={props.handleClick}
        >
            { props.label }
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Button;
