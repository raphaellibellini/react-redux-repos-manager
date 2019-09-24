import { createStore } from 'redux';

const INITIAL_STATE = {
    query: '',
    repositories: []
}

function reducer(state = INITIAL_STATE, action) {
    return state;
}

const store = createStore(reducer);

export default store;