export function updateQuery(query) {
    console.log(query)
    return {
        type: 'UPDATE_QUERY',
        payload: query
    }
}

export function addRepo(repo) {
    return {
        type: 'ADD_REPO',
        payload: repo
    }
}

export function deleteRepo(repo) {
    return {
        type: 'DELETE_REPO',
        payload: repo
    }
}

export function updateRepo(repo) {
    return {
        type: 'UPDATE_REPO',
        payload: repo
    }
}