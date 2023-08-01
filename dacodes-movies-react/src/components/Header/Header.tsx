import { useState } from 'react';
import { Box, Menu, MenuItem, IconButton } from '@mui/material';
import imgLogo from '../../assets/dacodeslogo.png';
import imgUserLogo from '../../assets/userlogo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Header: React.FC<{authenticated : boolean}> = ({authenticated}) => {
    
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        navigate('/login');
        handleMenuClose();
    };

    return (
        <Box
            sx={{
                backgroundColor: '#5141EA',
                height: '35px',
                width: '100%',
                left: 0,
                top: 0,
                paddingLeft: '1%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <img src={imgLogo} alt="Imagen secundaria" />

            {authenticated && (
                <IconButton
                    size="small"
                    aria-label="menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenuOpen}
                    color="inherit"
                >
                    <img src={imgUserLogo} alt="Logo de usuario" style={{ width: '25px', height: '25px' }} />
                </IconButton>
            )}
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleLogout}>
                    <LogoutIcon sx={{ mr: 1 }} />
                    Logout
                </MenuItem>
            </Menu>

        </Box>
    );
};

export default Header;
