import { Container, Box, Typography } from "@mui/material";
import LoginDialog from "../components/Login/LoginDialog";
import LoginForm from "../components/Login/LoginForm";
import { useLogin } from "../components/Login/hooks/useLogin";

const Login: React.FC = () => {

    // const [formState, setFormState] = useState({
    //     email: '',
    //     password: '',
    //     remember: false,
    // });

    // const [loginMessage, setLoginMessage] = useState('');
    // const [openDialog, setOpenDialog] = useState(false);

    // const [emailValid, setEmailValid] = useState(false);
    // const [emailError, setEmailError] = useState('');

    // const [passwordValid, setPasswordValid] = useState(false);
    // const [passwordError, setPasswordError] = useState(Array<string>);

    // const navigate = useNavigate();

    // useEffect(() => {
    //     sessionStorage.removeItem('guest_session_id');
    // }, []);

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value, checked } = event.target;
    //     setFormState((prevState) => ({
    //       ...prevState,
    //       [name]: name === "remember" ? checked : value,
    //     }));
    
    //     if (name === "email") {
    //       const { valid, error } = validateEmail(value);
    //       setEmailValid(valid);
    //       setEmailError(error);
    //     }
    
    //     if (name === "password") {
    //       const { valid, error } = validatePassword(value);
    //       setPasswordValid(valid);
    //       setPasswordError(error);
    //     }
    //   };

    // const handleSubmit = async (event: React.FormEvent) => {
    //     event.preventDefault();

    //     try {
    //         const guestSessionId = await fetchGuestSessionId();
    //         sessionStorage.setItem('guest_session_id', guestSessionId);
    //         setTimeout(() => {
    //             navigate("/movies");
    //         });
    //     } catch (error) {
    //         console.error('Error fetching guest session ID:', error);
    //         setLoginMessage('Error en la autenticación: ' + error);
    //         setOpenDialog(true);
    //     }
    // };

    // const isSignInButtonDisabled = !emailValid || !passwordValid || !formState.remember;

    const {
        formState,
        loginMessage,
        openDialog,
        emailValid,
        emailError,
        passwordValid,
        passwordError,
        handleChange,
        handleSubmit,
        isSignInButtonDisabled,
        setOpenDialog,
      } = useLogin();

    return (

        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography variant="h5" component="h5"  >
                    Login
                </Typography>
                <Typography variant="h6" component="span">
                    ¡Welcome!
                </Typography>

                <LoginForm
                    formState={formState}
                    emailValid={emailValid}
                    emailError={emailError}
                    passwordValid={passwordValid}
                    passwordError={passwordError}
                    isCheckboxChecked={formState.remember}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    isSignInButtonDisabled={isSignInButtonDisabled}
                />
            </Box>

            <LoginDialog open={openDialog} onClose={() => setOpenDialog(false)} loginMessage={loginMessage} />
        </Container>
    );
};

export default Login;
