import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import createLoggerMiddleware from 'redux-logger';
import rootReducer from './reducers';
import sagas from './sagas';

export default function configureStore(){
  const
    saga = createSagaMiddleware(),
    logger = createLoggerMiddleware(),
    middleware = applyMiddleware(logger, saga),
    devTools = window.devToolsExtension ? window.devToolsExtension() : f => f,
    store = createStore(rootReducer, compose(middleware, devTools));
  saga.run(sagas);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
