const INITIAL_STATE = {
    query: '',
    repositories: []
}

function repos(state = INITIAL_STATE, action) {
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

    if (action.type === 'UPDATE_REPO') {
        return {
            ...state,
            repositories: state.repositories.map(r => (
                r.id === action.payload.id ? action.payload : r
            ))
        }
    }

    return state;
}

export default repos;