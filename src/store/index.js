import { createStore } from 'redux';

const INITIAL_STATE = {
    query: '',
    repositories: []
}

function reducer(state = INITIAL_STATE, action) {
    if (action.type === 'UPDATE_QUERY') {
        return {
            ...state,
            query: action.payload
        }
    }

    return state;
}

const store = createStore(reducer);

export default store;