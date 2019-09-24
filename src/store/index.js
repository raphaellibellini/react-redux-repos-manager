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

    if (action.type === 'ADD_REPO') {
        return {
            ...state,
            repositories: state.repositories.concat(action.payload)
        }
    }

    if (action.type === 'DELETE_REPO') {
        return {
            ...state,
            repositories: state.repositories.filter((r) => {
                return r.id !== action.payload.id;
            })
        }
    }

    return state;
}

const store = createStore(reducer);

export default store;