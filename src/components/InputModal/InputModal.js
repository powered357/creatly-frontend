import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';

import { commonVariables } from 'THEME/variables';

import { Input, Button } from 'UI-KIT';

import { Form, FormField } from './styles/ModalStyled';

const customStyles = {
  content: {
    width: '100%',
    maxWidth: '500px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    boxShadow: commonVariables.boxShadow,
    borderRadius: commonVariables.borderRadius,
    border: 'none',
  },
};

export const InputModal = ({ name, placeholder, buttonText, onSubmit, isLoading, isOpen, closeModal, autoClose }) => {
  const { register, handleSubmit } = useForm();

  const submitData = (data) => {
    onSubmit(data);
    if (autoClose) closeModal();
  };

  const onRef = (input) => {
    register(input, { required: true });
    if (input) input.focus();
  };

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick
      ariaHideApp={false}
    >
      <Form onSubmit={handleSubmit(submitData)}>
        <FormField>
          <Input ref={onRef} name={name} placeholder={placeholder} />
        </FormField>
        <Button isLoading={isLoading}>{buttonText}</Button>
      </Form>
    </Modal>
  );
};

InputModal.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  autoClose: PropTypes.bool,
};

InputModal.defaultProps = {
  onSubmit: Function.prototype,
  isLoading: false,
  buttonText: 'Добавить',
  autoClose: true,
};
