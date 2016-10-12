import 'babel-polyfill';
import 'babel-plugin-transform-regenerator';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore  from './store';
import Hello from './components/hello';

const mount = document.getElementById('root'),
    store = configureStore();

const toRender = (
    <Provider store={store}>
        <Hello />
    </Provider>
);
ReactDOM.render(toRender, mount);

if (module.hot) module.hot.accept();