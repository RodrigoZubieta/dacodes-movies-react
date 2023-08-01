export interface GuestSessionResponse {
    success: boolean;
    guest_session_id: string;
    expires_at: string;
}

export interface MovieResponse {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    genre_name:string;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MoviesResponse {
    page: number;
    results: MovieResponse[];
    total_pages: number;
    total_results: number;
}

export interface GenreResponse{
    id: number;
    name: string;
}

export interface GenresMoviesResponse{
    genres : GenreResponse[];
}
