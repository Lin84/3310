import React from 'react';
import PropTypes from 'prop-types';

const MiniDisplay = (props) => {
    return <div className="mobile__mini-display">{props.selectedValue}</div>;
};

MiniDisplay.propTypes = {
    selectedValue: PropTypes.string.isRequired
};

export default MiniDisplay;
