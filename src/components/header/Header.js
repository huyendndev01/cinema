import { Link } from "react-router-dom"
import "./header.css"

import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" className="header__icon" alt=""/></Link>
        <div className="navBar">
          <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
          <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top rated</span></Link>
          <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
        </div>
      </div>
      <div className="headerRight">
      <i style={{color: "#fff"}} className="fa-solid fa-user"></i>
      </div>
    </div>
  )
}

export default Header
