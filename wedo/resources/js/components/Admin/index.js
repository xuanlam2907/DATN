import React from 'react';
import ReactDOM from 'react-dom';
import '../../polyfill'
import '../../../sass/app.scss';
import '../../../css/app.css';
import Admin from "./admin";
import * as serviceWorker from '../../serviceWorker';

import { icons } from '../../../assets/icons'
import { Provider } from 'react-redux'
import store from '../../store'

React.icons = icons
ReactDOM.render(
    <Provider store={store}>
        <Admin />
    </Provider>,
    document.getElementById('admin')
);

serviceWorker.unregister();
