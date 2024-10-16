const initialState = {
    token: null,
    isAuthenticated: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                error: null,
            };
        case 'SIGNUP_FAIL':
        case 'LOGIN_FAIL':
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
