import React from 'react'
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm fixed-top bg-white">
      <div className="container my-2">
        <a href="/" className="navbar-brand text-dark font-weight-bold"
          >Prakash Reddy</a
        >
      </div>
    </nav>
  )
}

export default Navbar