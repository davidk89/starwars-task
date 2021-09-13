import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '../Grid';
import CenterSpinner from '../CenterSpinner/CenterSpinner';
import ResponseAlert from '../ResponseAlert/ResponseAlert';
import { getFilms } from '../../store/actions/filmsAction';
import { filmsHeaders, getHeaders } from '../../helpers/getHeaders';

const Films = () => {
  const { state } = useLocation();
  const { push } = useHistory();
  const dispatch = useDispatch();
  const { data: values } = useSelector((store) => store.films);
  const { isLoading, error } = useSelector((store) => store.handler);

  if (!state) {
    push('/');
  }

  useEffect(() => {
    dispatch(getFilms(state));
  }, []);

  const data = {
    header: values?.length ? Object.keys(values[0]).filter(getHeaders(filmsHeaders)) : [],
    values,
  };

  if (error) return <ResponseAlert>{error}</ResponseAlert>;

  if (isLoading) return <CenterSpinner />;

  return (
    <div className="App">
      <Grid data={data} />
    </div>
  );
};

export default Films;
