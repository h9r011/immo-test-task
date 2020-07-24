const SET_INITIALIZING_STATUS = 'app/SET_INITIALIZING_STATUS';


let initialState = {
    isInitialized: false
};


const appReducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case SET_INITIALIZING_STATUS: {
            return {
                ...state,
                isInitialized: action.status
            }
        }
        default: {
            return state
        }
    }

};

export const setInitializingStatus = (status) => ({type: SET_INITIALIZING_STATUS, status})

export default appReducer;
