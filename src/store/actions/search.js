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