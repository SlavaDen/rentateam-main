import { Snackbar, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessageInfo } from 'store/app/app-selectors';
import { invisibleMessenger } from 'store/app/app-actions';

const Messenger = () => {
  const { isMessage, typeMessage, textMessage } = useSelector(selectMessageInfo);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(invisibleMessenger());
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      onClose={onClose}
      open={isMessage}
      autoHideDuration={6000}
    >
      <Alert
        severity={typeMessage}
        variant='filled'
        onClose={onClose}
      >
        {textMessage}
      </Alert>
    </Snackbar>
  );
};

export default Messenger;
