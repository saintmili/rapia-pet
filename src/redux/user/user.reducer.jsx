const INITIAL_STATE = {
    currentUser: null
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            localStorage.setItem("user", JSON.stringify(action.payload))
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer;