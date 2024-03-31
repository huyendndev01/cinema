import React, {useEffect, useState} from "react";

import { useParams } from 'react-router-dom'
import { getMovieList } from "../../services/useService";
import Card from "../card/Card";
import './movieList.css'

const MovieList = () => {
    const {type} = useParams()
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        getDataListMovie()
    }, [])

    useEffect(() => {
        getDataListMovie(type)

    }, [type])

    const getDataListMovie = async(type) => {
        const res = await getMovieList(type)

        setMovieList(res.data.results);
    }
  return (
    <div>
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Card movie={movie} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList
