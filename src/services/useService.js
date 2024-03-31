// import axios from "./customise-axios";
import axios from "axios"

const getData = () => {
    return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
}

const getMovieList = (type) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${type ? type : 'popular'}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
}

export {getData,getMovieList}