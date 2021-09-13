import { fetchMultipleLinks } from '../../helpers/api';
import { resetHandlers, setError, setLoading } from './handlersAction';

export const RESIDENTS_SET_DATA = 'RESIDENTS/SET_DATA';

export const setResidentsData = (payload) => ({
  type: RESIDENTS_SET_DATA,
  payload,
});

export const getResidents = (url) => async (dispatch) => {
  resetHandlers(dispatch);

  try {
    const response = await Promise.all(fetchMultipleLinks(url, dispatch));

    dispatch(setResidentsData(response));
  } catch (error) {
    dispatch(setError('There was an error.'));
  } finally {
    dispatch(setLoading(false));
  }
};
