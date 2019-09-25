// Utilizado quando tiver mais de um reducer!
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;