import React from 'react';
import PropTypes from 'prop-types';

const MiniDisplay = (props) => {
    const renderSelectedValue = props.selectedValue.join();

    return <div className="mobile__mini-display">{renderSelectedValue}</div>;
};

MiniDisplay.propTypes = {
    selectedValue: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MiniDisplay;
