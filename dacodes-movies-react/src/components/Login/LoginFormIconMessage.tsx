import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import './Login.css'

interface FormIconContainerProps {
  valid: boolean;
  errorMessage?: string | string[];
}

const FormIconContainer: React.FC<FormIconContainerProps> = ({ valid, errorMessage }) => {
  return (
    <div className="icon-container">
      {valid ? (
        <CheckCircleIcon className="icon-valid" />
      ) : (
        <ErrorIcon className="icon-invalid" />
      )}
      {!valid && errorMessage && (
        <div className="error-message">
          {Array.isArray(errorMessage) ? (
            errorMessage.map((error, index) => (
              <p key={index}>{error}</p>
            ))
          ) : (
            <p>{errorMessage}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FormIconContainer;
