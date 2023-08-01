import axios, { AxiosResponse } from 'axios';
import { MoviesResponse, GenresMoviesResponse, GuestSessionResponse, MovieResponse, GenreResponse } from '../types/types';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmQ2MjJhM2VjMDI1Mzc5NTM1ODQxYWY0ZDdlZDk4NCIsInN1YiI6IjY0YWI0YjY1M2UyZWM4MDBjYmNlNDMzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZC4vyUO-ICrQdVtAoYh9h2mR20Ec0q8zEt3BeTh0gBw';
const API_BASE_URL = 'https://api.themoviedb.org/3';

const createAxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const fetchGuestSessionId = async (): Promise<string> => {
  try {
    const response: AxiosResponse<GuestSessionResponse> = await createAxiosInstance.get('/authentication/guest_session/new');
    return response.data.guest_session_id;
  } catch (error) {
    console.error('Error fetching guest session ID:', error);
    return "";
  }
};

export const fetchMovies = async (filter: string, page: number): Promise<MoviesResponse | null> => {
  try {
    const response: AxiosResponse<MoviesResponse> = await createAxiosInstance.get(`/movie/${filter || ''}`, {
      params: { language: 'en-US', page: page.toString() },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return null;
  }
};

export const fetchGenresMovies = async (): Promise<GenresMoviesResponse | null> => {
  try {
    const response: AxiosResponse<GenresMoviesResponse> = await createAxiosInstance.get('/genre/movie/list');
    return response.data;
  } catch (error) {
    console.error('Error fetching Genres:', error);
    return null;
  }
};

export const moviesData = async (filter: string | undefined, pageNumber: number) => {

  const moviesResponse = filter !== undefined ? await fetchMovies(filter, pageNumber) : null;
  const moviesGenresResponse = await fetchGenresMovies();

  if (moviesResponse && moviesGenresResponse) {
      const updatedResults: MovieResponse[] = moviesResponse.results.map((movie) => {
          const genres = movie.genre_ids.map((genreId) =>
              moviesGenresResponse.genres.find((genre: GenreResponse) => genre.id === genreId)
          );

          const genreNames = genres.map((genre: GenreResponse | undefined) => genre?.name || "");
          const genreName = genreNames.join(", ");

          return { ...movie, genre_name: genreName };
      });

      moviesResponse.results = updatedResults;
  }

  return { moviesResponse };
};
