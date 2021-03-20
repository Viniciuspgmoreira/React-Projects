import './logo.css'
import React from 'react'
import video from '../assets/particles.mp4'
function Logo() {
  return (
    <aside className="logo">
      <h2>
        <video muted autoPlay={true} loop={true} controls={false}>
          <source src={video} autoPlay type="video/mp4"></source>
        </video>
        <div id="divLogo">
          We &nbsp;<i class="fa fa-heart text-danger"></i>
          <span>&nbsp;C</span>oddin<span>g</span>
        </div>
      </h2>
    </aside>
  )
}

export default Logo
