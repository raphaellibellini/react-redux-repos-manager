export const Types = {
    UPDATE_QUERY: 'repos/UPDATE_QUERY',
    REQUEST_ADD_REPO: 'repos/REQUEST_ADD_REPO',
    SUCCESS_ADD_REPO: 'repos/SUCCESS_ADD_REPO',
    FAILURE_ADD_REPO: 'repo/FAILURE_ADD_REPO',
    REQUEST_UPDATE_REPO: 'repos/REQUEST_UPDATE_REPO',
    SUCCESS_UPDATE_REPO: 'repos/SUCCESS_UPDATE_REPO',
    FAILURE_UPDATE_REPO: 'repos/FAILURE_UPDATE_REPO',
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

    if (action.type === Types.REQUEST_ADD_REPO) {
        return {
            ...state,
            loading: true,
            error: false
        }
    }

    if (action.type === Types.SUCCESS_ADD_REPO) {
        return {
            ...state,
            repositories: state.repositories.concat(action.payload),
            loading: false,
            error: false
        }
    }

    if (action.type === Types.FAILURE_ADD_REPO) {
        return {
            ...state,
            loading: false,
            error: action.error
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

    if (action.type === Types.REQUEST_UPDATE_REPO) {
        return {
            ...state,
            loading: true,
            error: false
        }
    }

    if (action.type === Types.SUCCESS_UPDATE_REPO) {
        return {
            ...state,
            repositories: state.repositories.map(r => (
                r.id === action.payload.id ? action.payload : r)),
            loading: false,
            error: false
        }
    }

    if (action.type === Types.FAILURE_UPDATE_REPO) {
        return {
            ...state,
            loading: false
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
        type: Types.REQUEST_ADD_REPO,
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
        type: Types.REQUEST_UPDATE_REPO,
        payload: repo
    })
}