import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();

    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        // error is type `ErrorResponse`
        errorMessage = error.error?.message || error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = 'Unknown error';
    }

    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <p>{errorMessage}</p>
            <Link to='/'>Go to back HOME</Link>
        </div>
    )
}

export default NotFound;

