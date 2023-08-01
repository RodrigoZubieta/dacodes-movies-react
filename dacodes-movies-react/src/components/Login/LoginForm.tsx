import React from "react";
import { Box, FormControlLabel, Checkbox, Button } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import FormIconMessage from "./LoginFormIconMessage";
import TextInputField from "../Input/TextInputField";
import './Login.css'

interface LoginFormProps {
    formState: any;
    emailValid: boolean;
    emailError: string;
    passwordValid: boolean;
    passwordError: string[];
    isCheckboxChecked: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent) => void;
    isSignInButtonDisabled: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
    formState,
    emailValid,
    emailError,
    passwordValid,
    passwordError,
    isCheckboxChecked,
    handleChange,
    handleSubmit,
    isSignInButtonDisabled,
}) => {
    return (
        <Box component="form" onSubmit={handleSubmit} noValidate className="form-container" >
            <TextInputField
                type="email"
                id="email"
                name="email"
                label="Email"
                value={formState.email}
                onChange={handleChange}
                className="text-input"
                required
            />
            <FormIconMessage valid={emailValid} errorMessage={emailError} />

            <TextInputField
                type="password"
                id="password"
                name="password"
                label="Password"
                value={formState.password}
                onChange={handleChange}
                className="text-input"
                required
            />
            <FormIconMessage valid={passwordValid} errorMessage={passwordError} />

            <FormControlLabel
                control={<Checkbox value={isCheckboxChecked} name="remember" onChange={handleChange} />}
                label="I have read and accept all the terms and conditions."
                className="checkbox-label"
            />

            <Button type="submit" variant="contained" className="submit-button" startIcon={<LoginIcon />} disabled={isSignInButtonDisabled}>
                Sign In
            </Button>
        </Box>
    );
};

export default LoginForm;
