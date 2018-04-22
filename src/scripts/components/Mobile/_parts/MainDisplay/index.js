import React from 'react';
import PropTypes from 'prop-types';

const MainDisplay = (props) => {
    const renderResults = props.results.map((result) => {
        return <div className="mobile__result" key={result}>{result}</div>;
    });

    return <div className="mobile__main-display">{renderResults}</div>;
};

MainDisplay.propTypes = {
    results: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MainDisplay;
