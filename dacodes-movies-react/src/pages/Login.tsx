import { Container, Box, Typography } from "@mui/material";
import LoginDialog from "../components/Login/LoginDialog";
import LoginForm from "../components/Login/LoginForm";
import { useLogin } from "../components/Login/hooks/useLogin";

const Login: React.FC = () => {
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
