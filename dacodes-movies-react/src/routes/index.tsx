import { Navigate, createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../templates/Template";
import MovieList, { loaderMovies } from "../pages/MovieList";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter(
    [{
        path: '/',
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/',
                element: <PrivateRoute />,
                children: [
                    {
                        index: true,
                        element: <Navigate to='/movies/now_playing' />,
                        loader: loaderMovies
                    },
                    {
                        path: '/movies',
                        element: <Navigate to='/movies/now_playing' />,
                        loader: loaderMovies
                    },
                    {
                        path: '/movies/:filter',
                        element: <MovieList />,
                        loader: loaderMovies
                    },
                ]
            }
        ]
    }

    ])