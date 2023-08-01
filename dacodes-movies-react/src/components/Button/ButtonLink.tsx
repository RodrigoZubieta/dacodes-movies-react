import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";

interface ButtonProps {
    to: string;
    label: string;
}

const ButtonLink: React.FC<ButtonProps> = ({ to, label }) => {
    const location = useLocation();
    const isActive = useMemo(() => location.pathname === to, [location, to]);

    return (
        <Button
            component={Link}
            to={to}
            variant={isActive ? "contained" : "outlined"}
            className={isActive ? "button-link-active" : "button-link"} 
            sx={{ margin: 2 }}
        >
            {label}
        </Button>
    );
};

export default ButtonLink;
