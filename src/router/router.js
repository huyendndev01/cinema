import MovieList from "../components/movieList/movieList"
import Home from "../pages/Home"
import Login from "../pages/Login"
import MovieDetail from "../pages/MovieDetail"
import notFoundPage from "../pages/notFoundPage"

export const router = [
    {path: '/', page: Home},
    {path: '/movie/:id', page: MovieDetail},
    {path: '/movies/:type', page: MovieList},
    {path: '/login', page: Login, isLayout: null},
    {path: '*', page: notFoundPage, isLayout: null},
]