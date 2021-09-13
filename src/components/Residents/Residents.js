import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Grid from '../Grid';
import ResponseAlert from '../ResponseAlert/ResponseAlert';
import CenterSpinner from '../CenterSpinner/CenterSpinner';
import { getResidents } from '../../store/actions/residentsAction';
import { getHeaders, residentsHeaders } from '../../helpers/getHeaders';

const Residents = () => {
  const { state } = useLocation();
  const { push } = useHistory();
  const { data: values } = useSelector((store) => store.residents);
  const { isLoading, error } = useSelector((store) => store.handler);
  const dispatch = useDispatch();

  if (!state) {
    push('/');
  }
  useEffect(() => {
    dispatch(getResidents(state));
  }, []);

  const data = {
    header: values?.length
      ? Object.keys(values[0]).filter(getHeaders(residentsHeaders))
      : [],
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

export default Residents;
