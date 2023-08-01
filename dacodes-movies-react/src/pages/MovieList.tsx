import { Params, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import ButtonNavbar from "../components/Button/ButtonNavbar";
import Paginator from "../components/Paginator/Paginator";

const MovieList = () => {
    const { movieFilter } = useLoaderData() as any;
    const [filterValue, setFilterValue] = useState(movieFilter.value);

    useEffect(() => {
        setFilterValue(movieFilter.value);
    }, [movieFilter.value]);

    return (
        <div>
            <ButtonNavbar />
            <Paginator key={filterValue} filter={filterValue} />

        </div>
    );
}

export default MovieList;

export const loaderMovies = ({ params }: { params: Params<string> }) => {
    const movieFilter = { value: params.filter };
    return { movieFilter };
};
