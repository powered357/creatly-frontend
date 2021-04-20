import { clearErrorsMsg, setErrorsMsg } from 'STORE/notifications';

export const dispatchErrorMsg = (dispatch, error) => {
  dispatch(clearErrorsMsg());
  dispatch(setErrorsMsg(error));
};
