import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Table, Button, ButtonGroup } from 'reactstrap';
import './Grid.css';

const Grid = ({ data: { header = [], values = [], actions = [] }, showActions = true }) => {
  const { pathname } = useLocation();

  const checkType = (value) => !Number.isNaN(Number.parseFloat(value));

  const getFilteredTypes = (colName) => values.filter((value) => checkType(value[colName]));

  const getHeaderType = (colName) => `(${getFilteredTypes(colName).length ? 'NUMBER' : typeof values[0][colName]})`;

  if (!header.length) {
    return (
      <div>
        {pathname === '/films' ? 'No films.' : 'The planet has no residents.'}
      </div>
    );
  }

  return (
    <Table className="gridTable" striped bordered>
      <thead>
        <tr>
          {header.map((colName, index) => (
            <th key={index}>
              { colName }
              <div>{getHeaderType(colName)}</div>
            </th>
          ))}
          {!!actions.length && showActions && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => (
          <tr key={index}>
            {header.map((colName) => (
              <td style={{ textAlign: getFilteredTypes(colName).length ? 'right' : 'center' }} key={colName}>{row[colName]}</td>
            ))}
            {!!actions.length && showActions
              && (
              <td className="gridActions">
                <ButtonGroup>
                  {actions.map(({ label, action }) => (
                    <Button onClick={() => action(row)} size="sm" key={label} color="primary">{label}</Button>
                  ))}
                </ButtonGroup>
              </td>
              )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

Grid.propTypes = {
  showActions: PropTypes.bool,
  data: PropTypes.shape({
    header: PropTypes.arrayOf(
      PropTypes.string,
    ).isRequired,
    values: PropTypes.arrayOf.isRequired,
    actions: PropTypes.arrayOf.isRequired,
  }).isRequired,
};

Grid.defaultProps = {
  showActions: true,
};

export default Grid;
