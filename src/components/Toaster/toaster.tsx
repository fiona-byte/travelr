import { useState, useEffect, SyntheticEvent } from 'react';
import { Alert, Snackbar } from '@mui/material';

type ToasterProps = {
  show: boolean;
  type: 'success' | 'error';
  message: string;
};

export default function Toaster({ show, type, message }: ToasterProps) {
  const [open, setOpen] = useState(false);

  const handleClose = (_e: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (show) setOpen(true);
  }, [show]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={type} variant='filled' sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
