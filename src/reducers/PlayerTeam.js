const PlayerTeam = (state = [],action) => {
    switch(action.type) {
        case 'ADD_PLAYER':
            return [...action.payload]
        case 'REMOVE_PLAYER':
            return state.filter(player => player.id != action.payload)  
        default:
            return state      
    }
}

export default PlayerTeam