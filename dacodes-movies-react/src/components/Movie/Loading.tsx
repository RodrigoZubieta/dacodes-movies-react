import { Backdrop, Box, CircularProgress } from "@mui/material";

const Loading = () => {
    return (
      <Backdrop open={true}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
        
          <CircularProgress color="primary" />
        </Box>
      </Backdrop>
    );
  };
  
  export default Loading;
  