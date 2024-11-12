// villaActions.js
import axios from 'axios';

export const fetchVillas = () => async (dispatch) => {
  try {
    const response = await axios.get('https://luxury-rental-backend.onrender.com/villas');
    dispatch({ type: 'FETCH_VILLAS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_VILLAS_ERROR', error });
  }
};

export const updateVilla = (id, villaData) => async (dispatch) => {
  try {
    const response = await axios.put(`https://luxury-rental-backend.onrender.com/villas/${id}`, villaData);
    dispatch({ type: 'UPDATE_VILLA_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_VILLA_ERROR', error });
  }
};
