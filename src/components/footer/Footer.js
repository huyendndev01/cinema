
import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <button className='btn__footer'>Sign in for more access</button>
      <div className='social'>
        <i className="fa-brands fa-tiktok"></i>
        <i className="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-square-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>
      <div>
        <ul className='link'>
            <li><a href='https://apps.apple.com/us/app/imdb-movies-tv-shows/id342792525?_branch_match_id=1295746494697721139&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL86pTNJLLCjQy8nMy9YP9k6pDDRzNDGxBABVqlN1IAAAAA%3D%3D&utm_campaign=mdot+sitewide+footer+Branch+update&utm_medium=marketing&utm_source=IMDb+Mdot'>Get the IMDb app</a></li>
            <li><a href='https://help.imdb.com/imdb'>Help</a></li>
            <li><a href='#'>Site Index</a></li>
            <li><a href='https://www.imdb.com/privacy?ref_=ft_pvc'>Privacy Policy</a></li>
            <li><a href='https://developer.imdb.com/'>IMDb Developer</a></li>
        </ul>
      </div>
      <p style={{fontSize: "12px", marginBottom: '20px'}}>© 1990-2024 by IMDb.com, Inc.</p>
    </div>
  )
}

export default Footer
