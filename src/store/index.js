import { combineReducers, createStore, applyMiddleware } from 'redux';
import repos from './ducks/repos';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    // Utilizado quando tiver mais de um reducer!
    combineReducers({
        repos
    }),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;