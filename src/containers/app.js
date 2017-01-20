import React from 'react';
import { Provider } from 'react-redux';
import css from '../style/app.sass';
import Hello from './hello';

export default ({store}) => (
  <Provider store={store}>
    <Hello />
  </Provider>
);