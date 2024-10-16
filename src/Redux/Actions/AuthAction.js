import axios from 'axios';

export const signup = (userData) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:3001/user/signup', userData);
        dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'SIGNUP_FAIL', payload: error.response.data.message });
    }
};

export const login = (userData) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:3001/user/login', userData);
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.message });
    }
};
