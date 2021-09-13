import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PlanetsPagination = ({ prevLink, nextLink }) => {
  const { push } = useHistory();

  const handleClick = (event, url) => {
    event.preventDefault();
    push(`/${url.slice(-1)}`);
  };

  return (
    <Pagination className="d-flex justify-content-center" aria-label="Page navigation example">
      <PaginationItem disabled={!prevLink}>
        <PaginationLink onClick={(e) => handleClick(e, prevLink)}>
          Previous page
        </PaginationLink>
      </PaginationItem>
      <PaginationItem disabled={!nextLink}>
        <PaginationLink onClick={(e) => handleClick(e, nextLink)}>
          Next page
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

PlanetsPagination.propTypes = {
  prevLink: PropTypes.string,
  nextLink: PropTypes.string,
};

PlanetsPagination.defaultProps = {
  prevLink: null,
  nextLink: null,
};

export default PlanetsPagination;
