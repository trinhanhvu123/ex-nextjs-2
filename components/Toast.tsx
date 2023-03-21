import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

type ToastProps = {
    msg: {
      title: string;
      msg: string;
    };
    handleShow: () => void;
    bgColor: 'success' | 'warning' | 'error';
  }
const Toast = ({msg, handleShow, bgColor}: ToastProps) => {
    const [open, setOpen] = useState(true);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
        handleShow()
      };

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={bgColor}>
                {msg.title}: {msg.msg}
            </MuiAlert>
        </Snackbar>
    )
}

export default Toast;