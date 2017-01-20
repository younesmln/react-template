import 'babel-polyfill';
import 'babel-plugin-transform-regenerator';
import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import App from './containers/app';
import configureStore  from './store';

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App)

if (module.hot) {
  module.hot.accept('./containers/app', () => {
    const newApp = require('./containers/app').default;
    render(newApp);
  });
}
