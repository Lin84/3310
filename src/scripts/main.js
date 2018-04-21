/**
 * main styles:
 */
import css from './../styles/main.scss';

/**
 * React Component:
 */
import configureStore from './redux/store/configureStore';
import { render, renderFactory } from './ultilities/render';

// react components:
import Headline from './components/_common/Headline';
// import PlusOne from './components/plus-one/PlusOne';
// import Button from './components/_common/Button';
import Mobile from './components/Mobile/Mobile';


/**
 * @param {object} config
 */
const app = (config) => {
    const store = configureStore(config);

    render(Headline, document.querySelector('#headline'), { label: 'T9 Generator' });

    render(Mobile, document.querySelector('#mobile'));
};

app(window.config);
