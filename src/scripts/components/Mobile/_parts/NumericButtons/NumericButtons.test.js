import React from 'react';
import renderer from 'react-test-renderer';

// react component
import NumericButtons from './index';

// props:
const handleClick = () => {};
const numericButtonsDefinition = [
    { label: '1 _', value: '' },
    { label: '2 abc', value: '2' },
    { label: '3 def', value: '3' },
    { label: '4 ghi', value: '4' },
    { label: '5 jkl', value: '5' },
    { label: '6 mno', value: '6' },
    { label: '7 pqrs', value: '7' },
    { label: '8 tuv', value: '8' },
    { label: '9 wxyz', value: '9' }
];

it('renders correctly', () => {
    const tree = renderer
        .create(<NumericButtons
            handleClick={handleClick}
            definitions={numericButtonsDefinition}
        />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
