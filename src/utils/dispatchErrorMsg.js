import { clearErrorMsg, setErrorMsg } from 'STORE/notifications';

export const dispatchErrorMsg = (dispatch, error) => {
  dispatch(clearErrorMsg());
  dispatch(setErrorMsg(error));
};
