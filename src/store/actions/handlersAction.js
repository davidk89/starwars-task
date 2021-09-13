export const SET_ERROR = 'HANDLERS/SET_ERROR';
export const SET_LOADING = 'HANDLERS/SET_LOADING';

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const resetHandlers = (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setError(null));
};
