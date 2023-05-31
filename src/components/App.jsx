import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Movies from './pages/Movies'
import Layout from "./Layout/Layout";
import Cast from "./pages/Cast";
import Reviews from "./pages/Reviews";
import MovieDetails from './pages/MovieDetails'
const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} ></Route>
            <Route path="reviews" element={<Reviews />} >
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
        </Route>
    </Routes> 
     
  );
};

export default App