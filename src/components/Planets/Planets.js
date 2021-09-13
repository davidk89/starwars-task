import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { UncontrolledAlert } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '../Grid';
import CenterSpinner from '../CenterSpinner/CenterSpinner';
import ResponseAlert from '../ResponseAlert/ResponseAlert';
import PlanetsPagination from '../Pagination/Pagination';
import Modal from '../Modal/Modal';
import { getPlanets } from '../../store/actions/planetsAction';
import { getHeaders, planetsHeaders } from '../../helpers/getHeaders';

function Planets({ withCount = true }) {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [response, setResponse] = useState(null);
  const { data: values } = useSelector((store) => store.planets);
  const { isLoading, error } = useSelector((store) => store.handler);

  useEffect(() => {
    const page = pathname.replace('/', '') || 1;

    dispatch(getPlanets(`https://swapi.dev/api/planets/?page=${page}`, push));
  }, [pathname]);

  const data = {
    header: [],
    values: [],
    actions: [
      {
        label: 'Go to Films',
        action: (row) => {
          push('films', row.filmsLink);
        },
      },
      {
        label: 'Go to Residents',
        action: (row) => {
          push('residents', row.residentsLink);
        },
      },
      {
        label: 'Go to Planet details',
        action: (row) => {
          push('details', row);
        },
      },
      {
        label: 'Open modal',
        action: () => {
          setIsOpen(true);
        },
      },
    ],
  };

  if (values?.results) {
    const header = Object.keys(values.results[0])
      .filter(getHeaders(planetsHeaders(withCount)));

    const newValues = values.results.map((value) => {
      const newValue = { ...value };

      newValue.residentsLink = newValue.residents;
      newValue.residents = newValue.residents.length;

      newValue.filmsLink = newValue.films;
      newValue.films = newValue.films.length;

      return newValue;
    });

    data.header = header;
    data.values = newValues;
  }

  if (error) return <ResponseAlert>{error}</ResponseAlert>;

  if (isLoading) return <CenterSpinner />;

  return (
    <div className="App">
      {!isOpen && response && (
        <UncontrolledAlert color={response.type}>{response.message}</UncontrolledAlert>
      )}
      <Grid data={data} />
      <PlanetsPagination prevLink={values?.previous} nextLink={values?.next} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} setResponse={setResponse} />
    </div>
  );
}

Planets.propTypes = {
  withCount: PropTypes.bool,
};

Planets.defaultProps = {
  withCount: false,
};

export default Planets;
