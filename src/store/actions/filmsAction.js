import { fetchMultipleLinks } from '../../helpers/api';
import { resetHandlers, setError, setLoading } from './handlersAction';

export const FILMS_SET_DATA = 'FILMS/SET_DATA';

export const setFilmsData = (payload) => ({
  type: FILMS_SET_DATA,
  payload,
});

export const getFilms = (urls) => async (dispatch) => {
  resetHandlers(dispatch);
  try {
    const response = await Promise.all(fetchMultipleLinks(urls, dispatch));

    dispatch(setFilmsData(response));
  } catch (error) {
    dispatch(setError('There was an error.'));
  } finally {
    dispatch(setLoading(false));
  }
};
