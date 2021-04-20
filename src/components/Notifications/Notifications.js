import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const Notifications = () => {
  const [open, setOpen] = useState(false);
  const errorMsg = useSelector(({ notifications }) => notifications.error);
  const successMsg = useSelector(({ notifications }) => notifications.success);

  useEffect(() => {
    if (errorMsg || successMsg) handleOpen();
  }, [errorMsg, successMsg]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity={errorMsg ? 'error' : 'success'}>
          {errorMsg || successMsg}
        </Alert>
      </Snackbar>
    </>
  );
};
