import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import startfill from '../../assets/startfill.png'
import startempty from '../../assets/starempty.png'
import moviedefault from '../../assets/moviedefault.jpg'
import { MovieResponse } from '../../types/types';

interface MovieProps {
  movies: MovieResponse[];
}

const Movie: React.FC<MovieProps> = ({ movies }) => {

  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null);
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isScreenMiddle = useMediaQuery(theme.breakpoints.down('md'));
  const posterMaxWidth = isScreenSmall ? '50%' : isScreenMiddle ? '80%' : '80%';


  const handleMouseEnter = (movieId: number) => {
    setHoveredMovie(movieId);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };

  const renderStars = (voteAverage: number) => {
    const maxStars = 5;
    const filledStars = Math.round((voteAverage / 10) * maxStars);
    const emptyStars = maxStars - filledStars;

    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <img
          key={i}
          src={startfill}
          alt="Filled Star"
          style={{ width: '16px', height: '16px', marginRight: '2px' }}
        />
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <img
          key={filledStars + i}
          src={startempty}
          alt="Empty Star"
          style={{ width: '16px', height: '16px', marginRight: '2px' }}
        />
      );
    }

    return stars;
  };

  return (
    <Container>
      <Grid container>
        {movies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={4} md={3}>
            <Box
              position="relative"
              display="flex"
              flexDirection="column"
              onMouseEnter={() => handleMouseEnter(movie.id)}
              onMouseLeave={handleMouseLeave}
              mb="5%"
            >
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : moviedefault}
                alt={movie.title}
                style={{
                  width:  posterMaxWidth , 
                  height: 'auto',
                  borderRadius: '20px',
                  transition: 'opacity 0.4s ease',
                  opacity: hoveredMovie === movie.id ? 0.8 : 1,
                }}
              />
              {hoveredMovie === movie.id && (
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  width={posterMaxWidth}
                  height="100%"
                  borderRadius="20px"
                  bgcolor="rgba(0, 0, 0, 0.7)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Typography variant="h6" color="white" textAlign="center" gutterBottom>
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" color="white" textAlign="center" sx={{ paddingBottom: 1, fontSize: '8px' }}>
                    {movie.release_date} - {movie.genre_name}
                  </Typography>
                  <Typography component="p" color="white" textAlign="center" sx={{ paddingBottom: 2, fontSize: '9px' }}>
                    {movie.overview}
                  </Typography>
                  <Box display="flex" alignItems="center" justifyContent="center">

                    <Box display="flex" alignItems="center" justifyContent="center" ml={1}>
                      {renderStars(movie.vote_average)}
                    </Box>
                  </Box>

                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Movie;
