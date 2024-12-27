import React from 'react'
import Brand from './Brand'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light m-auto">
    <div className="container nav-center flex-box ">
      <Brand/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Menu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Reservations</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Order Online</a>
          </li>
        </ul>
      </div>
    </div>
</nav>
  )
}

export default Nav
