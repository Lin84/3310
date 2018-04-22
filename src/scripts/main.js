// main styles:
import css from './../styles/main.scss';

// ultilities:
import { render, renderFactory } from './ultilities/render';

// config:
import configureStore from './redux/store/configureStore';

// react components:
import Headline from './components/_common/Headline';

// connected react components:
import Mobile from './components/Mobile';

/**
 * @param {object} config
 */
const app = (config) => {
    const store = configureStore(config);

    render(Headline, document.querySelector('#headline'), { label: 'T9 Generator' });
    render(Mobile, document.querySelector('#mobile'), {}, store);
};

app(window.config);
