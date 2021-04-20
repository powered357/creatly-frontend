import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { commonVariables } from 'THEME/variables';

const basicStyles = {
  width: '100%',
  maxWidth: '550px',
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  transform: 'translate(-50%, -50%)',
  boxShadow: commonVariables.boxShadow,
  borderRadius: commonVariables.borderRadius,
  border: 'none',
};

export const BasicModal = ({ children, isOpen, closeModal, styles }) => (
  <Modal
    isOpen={isOpen}
    style={{ content: { ...basicStyles, ...styles } }}
    onRequestClose={closeModal}
    shouldCloseOnOverlayClick
    ariaHideApp={false}
  >
    {children}
  </Modal>
);

BasicModal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  styles: PropTypes.object,
};

BasicModal.defaultProps = {
  styles: {},
};
