export const addPlayer  = (payload) => {
    return {
        type:'ADD_PLAYER',
        payload
    }
}

export const removePlayer  = (payload) => {
    return {
        type:'REMOVE_PLAYER',
        payload
    }
} 