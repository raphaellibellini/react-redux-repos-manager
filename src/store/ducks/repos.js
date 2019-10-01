export const Types = {
    UPDATE_QUERY: 'repos/UPDATE_QUERY',
    ADD_REPO: 'repos/ADD_REPO',
    UPDATE_REPO: 'repos/UPDATE_REPO',
    DELETE_REPO: 'repos/DELETE_REPO'
}

const INITIAL_STATE = {
    query: '',
    repositories: [],
    loading: false,
    error: false
}

function repos(state = INITIAL_STATE, action) {
    if (action.type === Types.UPDATE_QUERY) {
        return {
            ...state,
            query: action.payload
        }
    }

    /*
    if (action.type === Types.ADD_REPO) {
        return {
            ...state,
            repositories: state.repositories.concat(action.payload)
        }
    }
    */

    if (action.type === 'REQUEST_REPO') {
        return {
            ...state,
            loading: true,
            error: false
        }
    }

    if (action.type === 'SUCCESS_REPO') {
        return {
            ...state,
            repositories: state.repositories.concat(action.payload),
            loading: false,
            error: false
        }
    }

    if (action.type === 'FAILURE_REPO') {
        return {
            ...state,
            loading: false
        }
    }

    if (action.type === Types.DELETE_REPO) {
        return {
            ...state,
            repositories: state.repositories.filter((r) => {
                return r.id !== action.payload.id;
            })
        }
    }

    /*
    if (action.type === Types.UPDATE_REPO) {
        return {
            ...state,
            repositories: state.repositories.map(r => (
                r.id === action.payload.id ? action.payload : r
            ))
        }
    }
    */

    if (action.type === 'REQUEST_UPDATE_REPO') {
        return {
            ...state,
            loading: true,
            error: false
        }
    }

    if (action.type === 'SUCCESS_UPDATE_REPO') {
        return {
            ...state,
            repositories: state.repositories.map(r => (
                r.id === action.payload.id ? action.payload : r)),
            loading: false,
            error: false
        }
    }

    if (action.type === 'FAILURE_UPDATE_REPO') {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }

    return state;
}

export default repos;

// Actions
export const Creators = {
    updateQuery: query => ({
        type: Types.UPDATE_QUERY,
        payload: query
    }),

    /*
    addRepo: repo => ({
        type: Types.ADD_REPO,
        payload: repo
    }),
    */

    requestRepo: query => ({
        type: 'REQUEST_REPO',
        payload: query
    }),

    deleteRepo: repo => ({
        type: Types.DELETE_REPO,
        payload: repo
    }),

    /*
    updateRepo: repo => ({
        type: Types.UPDATE_REPO,
        payload: repo
    })
    */

    requestUpdateRepo: repo => ({
        type: 'REQUEST_UPDATE_REPO',
        payload: repo
    })
}