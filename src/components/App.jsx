import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Layout from "./Layout/Layout";
import Cast from "./pages/Cast/Cast";
import Reviews from "./pages/Reviews/Reviews";
import { ToastContainer } from 'react-toastify';
import { lazy } from "react"


const Movies = lazy(() => import('./pages/Movies/Movies'))
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'))

const App = () => {

  return (
    <>
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
     
    
    <ToastContainer autoClose={3000} />
    </>
  );
};

export default App