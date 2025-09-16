import Body from "../pages/Body";
import Favourites from "../pages/Favourites";
import MoviePage from "../pages/MoviePage";

const routesConfig = [
  { path: '/', element: <Body /> },
  { path: '/movie/:id', element: <MoviePage /> },
  { path: 'favorites', element: <Favourites/> }
];

export default routesConfig;