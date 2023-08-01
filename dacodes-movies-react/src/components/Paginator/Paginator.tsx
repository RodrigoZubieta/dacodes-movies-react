import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { MoviesResponse } from "../../types/types";
import { moviesData } from "../../services/movieservices";
import Loading from "../Movie/Loading";
import Movie from "../Movie/Movie";


interface CustomPaginationProps {
    filter: string
}

const Paginator: React.FC<CustomPaginationProps> = ({ filter }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse | null>(null);

    useEffect(() => {
        loadMovies(currentPage);
    }, [currentPage]);

    const loadMovies = async (page: number) => {
        const response = (await moviesData(filter, page)).moviesResponse;
        if (response) {
            setMoviesResponse(response);
        }
    };

    if (!moviesResponse || moviesResponse.results.length === 0) {
        return <Loading />
    }

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        event.preventDefault();
        setCurrentPage(page);
    };


    return (
        <div>

            <Movie movies={moviesResponse.results} />

            <div style={{
                marginTop: 10,
                justifyContent: 'center',
                display: 'flex'
            }} >
                <Pagination
                    count={moviesResponse.total_pages > 500? 500 : moviesResponse.total_pages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    shape="circular"
                    variant="outlined"
                    siblingCount={0}
                    renderItem={(item) => <PaginationItem sx={{ color: "white" }} {...item} />}
                />
            </div>


        </div>
    );
};

export default Paginator;


