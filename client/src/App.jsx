import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Registration from "./components/Registration";

import { Redirect, Route } from "react-router-dom";

//HOC
import HomeLayoutHoc from "./HOC/Home.hoc";
import MovieLayoutHoc from "./HOC/movie.hoc"

//Layout
import HomeLayout from "./layouts/Homepage.layout";

//Pages
import HomePage from './Pages/HomePage'
import Moviepage from "./Pages/Moviepage";

function App() {
  return (
    <>
      <HomeLayoutHoc path="/" exact component={HomePage} />
      <MovieLayoutHoc path="/movie/:id" exact component={Moviepage} />
      <Route exact path="/register">
        <Registration />
      </Route>
    </>

  );
}

export default App;