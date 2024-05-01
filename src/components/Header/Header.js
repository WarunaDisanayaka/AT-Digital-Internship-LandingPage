import React from 'react'
import "./Header.css"
import "../../assets"
import { logo } from '../../assets'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src={logo} alt="Logo"/> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">SERVICES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ABOUT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CONTACT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">CAREERS</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header