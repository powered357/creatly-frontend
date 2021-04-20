import { clearSuccessMsg, setSuccessMsg } from 'STORE/notifications';

export const dispatchSuccessMsg = (dispatch, message) => {
  dispatch(clearSuccessMsg());
  dispatch(setSuccessMsg(message));
};
