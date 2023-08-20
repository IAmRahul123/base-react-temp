// Common Reducers should only be written here module specific reducers should be written in sepcific modules
// Initial State
const initialState = {
    sidebarShow : false
};
// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_SIDEBAR': {
            return {
                // State
                ...state,
                // Redux Store
                sidebarShow: action.sidebarShow,
            }
        }
        
        // Default
        default: {
            return state;
        }
    }
};
// Exports
export default authReducer;