import React from 'react';
import renderer from 'react-test-renderer';

// react component:
import MiddleBody from './index';

// props:
const removeLastEnteredData = () => {};
const handleClickSendButton = () => {};
const selectedValue = ['2', '3', '6'];

it('renders correctly', () => {
    const tree = renderer
        .create(<MiddleBody
            removeLastEnteredData={removeLastEnteredData}
            handleClickSendButton={handleClickSendButton}
            selectedValue={selectedValue.join('')}
        />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
