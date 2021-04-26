import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { Input, Button, BasicModal } from 'UI-KIT';

import { Form, FormField } from './styles/ModalStyled';

export const ModalInput = ({ name, placeholder, buttonText, onSubmit, isLoading, isOpen, closeModal, autoClose }) => {
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
    <BasicModal isOpen={isOpen} closeModal={closeModal}>
      <Form onSubmit={handleSubmit(submitData)}>
        <FormField>
          <Input ref={onRef} name={name} placeholder={placeholder} />
        </FormField>
        <div>
          <Button type="submit" isLoading={isLoading}>
            {buttonText}
          </Button>
        </div>
      </Form>
    </BasicModal>
  );
};

ModalInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  autoClose: PropTypes.bool,
};

ModalInput.defaultProps = {
  onSubmit: Function.prototype,
  isLoading: false,
  buttonText: 'Добавить',
  autoClose: true,
};
