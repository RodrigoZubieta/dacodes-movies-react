import React from 'react';
import { Dialog, DialogContent, DialogContentText, DialogActions, Button, Box } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
  loginMessage: string;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ open, onClose, loginMessage }) => {
  return (
    <Dialog open={open} onClose={onClose}
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        },
      }}>

      <DialogContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ErrorIcon sx={{ color: 'red', fontSize: 40, marginRight: '8px' }} />
          <DialogContentText>{loginMessage}</DialogContentText>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
