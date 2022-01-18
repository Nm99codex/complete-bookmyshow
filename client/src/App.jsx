import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Redirect, Route } from "react-router-dom";

//HOC
import HomeLayoutHoc from "./HOC/Home.hoc";
import MovieLayoutHoc from "./HOC/movie.hoc"


//Pages
import HomePage from './Pages/HomePage'
import Moviepage from "./Pages/Moviepage";

function App() {
  return (
    <>
      <HomeLayoutHoc path="/" exact component={HomePage} />
      <MovieLayoutHoc path="/movie/:id" exact component={Moviepage} />
    </>

  );
}

export default App;