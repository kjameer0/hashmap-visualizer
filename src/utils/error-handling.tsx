import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>
            {error.status}: {error.statusText}
          </i>
        </p>
      </div>
    );
  } else {
    return (
      <div id="error-page">
        <p>Sorry, an unexpected error has occurred.</p>
        <p>Unknow type of error</p>
      </div>
    );
  }
}
