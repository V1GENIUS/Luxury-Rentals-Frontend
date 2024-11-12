
const initialState = {
    list: [],
    error: null,
  };

  const villaReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_VILLAS_SUCCESS':
        return { ...state, list: action.payload };
      case 'UPDATE_VILLA_SUCCESS':
        return {
          ...state,
          list: state.list.map(villa => villa._id === action.payload._id ? action.payload : villa),
        };
      case 'FETCH_VILLAS_ERROR':
      case 'UPDATE_VILLA_ERROR':
        return { ...state, error: action.error };
      default:
        return state;
    }
  };

export default villaReducer;
