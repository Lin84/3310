import React from 'react';
import PropTypes from 'prop-types';

import Button from './../../../_common/Button';

const NumericButtons = (props) => {
    const { definitions, handleClick } = props;
    const renderButtons = definitions.map(({ label, value }) => {
        return (
            <Button
                key={label}
                customClass="btn mobile__numberic-button"
                label={label}
                handleClick={() => handleClick(value)}
            />
        );
    });

    return renderButtons;
};

NumericButtons.propTypes = {
    definitions: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleClick: PropTypes.func.isRequired
};

export default NumericButtons;
