import React from 'react';
import PropTypes from 'prop-types';

import Button from './../../_common/Button';

const NumericButtons = (props) => {
    const renderButtons = props.definitions.map(({ label, value }) => {
        return (
            <Button
                key={label}
                customClass="btn mobile__numberic-button"
                label={label}
                handleClick={() => console.log(`Click send button ${value}`)}
            />
        );
    });

    return renderButtons;
};

NumericButtons.propTypes = {
    definitions: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default NumericButtons;
