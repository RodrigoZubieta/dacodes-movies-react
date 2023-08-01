import imgFooterCover from "../../assets/footercontent.png"

import { Box } from "@mui/material";

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                color: '#FFF',
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '208px',
                objectFit: 'cover'
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="1728" height="853" viewBox="0 0 1728 853" fill="none">
                <path d="M833.881 37.7856C271.276 -45.9827 88.5883 29.955 -49.996 69.9885L-49.9999 853.001L1753 853L1753 69.9883C1631.21 106.686 1355.45 115.443 833.881 37.7856Z" fill="url(#paint0_linear_12_154)" />
                <defs>
                    <linearGradient id="paint0_linear_12_154" x1="851.498" y1="-32.1802" x2="851.402" y2="703.714" gradientUnits="userSpaceOnUse">
                        <stop offset="0.00520833" stopColor="#5141EA" />
                        <stop offset="0.4" stopColor="#3AE3C3" stopOpacity="0.7" />
                        <stop offset="1"  stopColor="#3AE3C3" stopOpacity="0.9" />
                    </linearGradient>
                </defs>
            </svg>
            <Box
                position="absolute"
                left="16%"
                bottom="0"
            >
                <img src={imgFooterCover} alt="Imagen interna" />
            </Box>
        </Box>
    );
};
export default Footer;