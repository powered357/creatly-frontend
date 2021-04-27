import PropTypes from 'prop-types';

import { Button, BasicModal } from 'UI-KIT';

import { Title, TextStyled, ButtonGroup } from './styles/ModalStyled';

export const ModalConfirm = ({ title, text, successFunc, cancelFunc, isLoading, isOpen, closeModal, autoClose }) => {
  const handleSuccess = () => {
    successFunc();
    if (autoClose) closeModal();
  };

  const handleCancel = () => {
    cancelFunc();
    if (autoClose) closeModal();
  };

  return (
    <BasicModal isOpen={isOpen} closeModal={closeModal} styles={{ padding: '40px' }}>
      {<Title>{title}</Title>}
      {text && <TextStyled>{text}</TextStyled>}
      <ButtonGroup>
        <Button onClick={handleSuccess} isLoading={isLoading}>
          Подтвердить
        </Button>
        <Button onClick={handleCancel} theme="inverse">
          Отменить
        </Button>
      </ButtonGroup>
    </BasicModal>
  );
};

ModalConfirm.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  successFunc: PropTypes.func,
  cancelFunc: PropTypes.func,
  isLoading: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  autoClose: PropTypes.bool,
};

ModalConfirm.defaultProps = {
  text: '',
  successFunc: Function.prototype,
  cancelFunc: Function.prototype,
  isLoading: false,
  autoClose: true,
};
