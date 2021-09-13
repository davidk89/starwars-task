import { useLocation, useHistory } from 'react-router-dom';
import Grid from '../Grid';
import { getHeaders, planetDetailsHeaders } from '../../helpers/getHeaders';

const PlanetDetails = () => {
  const { state } = useLocation();
  const { push } = useHistory();

  if (!state) {
    push('/');
  }

  const data = {
    header: state ? Object.keys(state)
      .filter(getHeaders(planetDetailsHeaders)) : [],
    values: [state],
  };

  return (
    <div className="App">
      <Grid data={data} />
    </div>
  );
};

export default PlanetDetails;
