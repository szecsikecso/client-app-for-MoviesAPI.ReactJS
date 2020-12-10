import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import Landing from "../components/Landing";
import NotFoundPage from "../components/NotFoundPage";

import { GlobalStyle } from "./utils/styledGlobal";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/landing" />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/search" component={Landing} />
          <Route
            path={[
              "/landing/:id",
              "/search/:query",
            ]}
            component={
              Landing

              /*({match}) => {
                const initialMovieId = match.params.id ?? 0;
                if (isNaN(parseInt(initialMovieId))) {
                  return NotFoundMoviePage;
                } else {
                  return Landing;
                }
              }*/
          }
          />
          <Route component={NotFoundPage} /*children={({match, location, history}) =>
          //!console.log(match) &&
          //!console.log(location) &&
          //!console.log(history) &&
          (
            <div>
              <div>Location: {location.pathname}</div>
            </div>
          )}*/
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

/**
 * <Router history={history}>
 * </Router>
 */

//export default App;
export default process.env.NODE_ENV === "development" ? hot(App) : App;
