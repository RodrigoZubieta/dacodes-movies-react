import { Box } from '@mui/material';
import ButtonLink from './ButtonLink';

const ButtonNavbar = () => {

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box display="flex" justifyContent="center" >
        <ButtonLink to='/movies/now_playing' label='Now Playing'  />
        <ButtonLink to='/movies/popular' label='Popular'  />
        <ButtonLink to='/movies/top_rated' label='Top Rated'  />
        <ButtonLink to='/movies/upcoming' label='Upcoming'  />
      </Box>
    </Box>
  );
};

export default ButtonNavbar;
