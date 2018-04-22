import React from 'react';
import renderer from 'react-test-renderer';

// react component:
import MainDisplay from './index';

// props:
const results = ['test', 'maindisplay'];

it('renders correctly', () => {
    const tree = renderer
        .create(<MainDisplay results={results} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
