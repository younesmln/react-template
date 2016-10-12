
import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import createLoggerMiddleware from 'redux-logger';
import sagas from './sagas';

export default function configureStore(){
    const
        reducers = combineReducers({test: () => 0 }),
        saga = createSagaMiddleware(),
        logger = createLoggerMiddleware(),
        middleware = applyMiddleware(logger, saga),
        devTools = window.devToolsExtension ? window.devToolsExtension() : f => f,
        store = createStore(reducers, compose(middleware, devTools));
    saga.run(sagas);
    return store;
}