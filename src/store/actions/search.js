export function updateQuery(query) {
    console.log(query)
    return {
        type: 'UPDATE_QUERY',
        payload: query
    }
}