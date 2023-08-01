import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from '../LoginValidation';
import { fetchGuestSessionId } from '../../../services/movieservices';

export const useLogin = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const [loginMessage, setLoginMessage] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const [emailValid, setEmailValid] = useState(false);
  const [emailError, setEmailError] = useState('');

  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordError, setPasswordError] = useState(Array<string>);

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.removeItem('guest_session_id');
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: name === 'remember' ? checked : value,
    }));

    if (name === 'email') {
      const { valid, error } = validateEmail(value);
      setEmailValid(valid);
      setEmailError(error);
    }

    if (name === 'password') {
      const { valid, error } = validatePassword(value);
      setPasswordValid(valid);
      setPasswordError(error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const guestSessionId = await fetchGuestSessionId();
      sessionStorage.setItem('guest_session_id', guestSessionId);
      setTimeout(() => {
        navigate('/movies');
      });
    } catch (error) {
      console.error('Error fetching guest session ID:', error);
      setLoginMessage('Error en la autenticación: ' + error);
      setOpenDialog(true);
    }
  };

  const isSignInButtonDisabled = !emailValid || !passwordValid || !formState.remember;

  return {
    formState,
    emailValid,
    emailError,
    passwordValid,
    passwordError,
    handleChange,
    handleSubmit,
    isSignInButtonDisabled,
    loginMessage,
    openDialog,
    setOpenDialog,
  };
};

