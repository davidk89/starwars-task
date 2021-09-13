import { fetchOneLink } from '../../helpers/api';
import { resetHandlers, setError, setLoading } from './handlersAction';

export const PLANETS_SET_DATA = 'PLANETS/SET_DATA';

export const setPlanetsData = (payload) => ({
  type: PLANETS_SET_DATA,
  payload,
});

export const getPlanets = (link, push) => async (dispatch) => {
  resetHandlers(dispatch);

  try {
    const { error, data } = await fetchOneLink(link);

    if (error) {
      dispatch(setError(error));
    } else {
      dispatch(setPlanetsData(data));
    }
  } catch (error) {
    if (error.response.status === 404) {
      push('/not-found');
    } else {
      dispatch(setError('There was an error.'));
    }
  } finally {
    dispatch(setLoading(false));
  }
};
