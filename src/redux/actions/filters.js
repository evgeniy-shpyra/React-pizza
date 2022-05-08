export const setSortBy = (type) => {
    return {
        type: 'SET_SORT_BY',
        payload: type
    }
}

export const setCategory = (index) => {
    return {
        type: 'SET_CATEGORY',
        payload: index
    }
}