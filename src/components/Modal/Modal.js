import PropTypes from 'prop-types';
import {
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';
import ModalForm from '../ModalForm/ModalForm';

const CustomModal = ({ isOpen, setResponse, setIsOpen }) => {
  const handleToggle = () => {
    if (isOpen) {
      setResponse(null);
    }

    setIsOpen(!isOpen);
  };

  return (
    <Modal isOpen={isOpen} toggle={handleToggle}>
      <ModalHeader toggle={handleToggle}>Modal</ModalHeader>
      <ModalBody>
        <ModalForm setIsOpen={setIsOpen} setResponse={setResponse} />
      </ModalBody>
    </Modal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setResponse: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default CustomModal;
