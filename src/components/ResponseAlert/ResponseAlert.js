import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const ResponseAlert = ({ children }) => (
  <div className="App">
    <Alert color="danger">
      {children}
    </Alert>
  </div>
);

ResponseAlert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ResponseAlert;
