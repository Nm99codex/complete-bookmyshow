import React from "react";
import { Route } from "react-router-dom";

// Layout
import MovieLayout from "../layouts/Moviepage.layout";

function MovieLayoutHoc({ component: Component, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <MovieLayout {...props}>
            <Component {...props} />
          </MovieLayout>
        )}
      />
    </>
  );
}

export default MovieLayoutHoc;