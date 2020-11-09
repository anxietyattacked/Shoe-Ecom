import React from 'react'
import "./styles/Header.css"

const Header = () => {
    return (
        <div>
            <header>
            <nav className="nav-bar">
            <div>
            <a className="header-title" href="/">Kicks</a>
            </div>
            <div className="links">
            <a className="nav-link" href="/login">Sign In</a>
            <a className="nav-link" href="/cart">Cart</a>
            </div>
            </nav>
            </header>
        </div>
    )
}

export default Header
