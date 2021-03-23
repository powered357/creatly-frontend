import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';

import { commonVariables } from 'THEME/variables';

import { Input, Button } from 'UI-KIT';

import { Form, FormField } from '../styles/EditorStyled';

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

export const InputModal = ({ name, placeholder, onSubmit, isOpen, closeModal }) => {
  const inputRef = useRef();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (inputRef.current) {
      register(inputRef.current);
      inputRef.current.focus();
    }
  }, []);

  const submitData = (data) => {
    onSubmit(data);
    closeModal();
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
          <Input name={name} ref={register({ required: true })} placeholder={placeholder} />
        </FormField>
        <Button>Добавить</Button>
      </Form>
    </Modal>
  );
};

InputModal.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

InputModal.defaultProps = {
  onSubmit: Function.prototype,
};
