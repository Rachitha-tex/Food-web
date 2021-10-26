import React from 'react'
import image from '../img/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar_text">
                <div className="logo">
                <img src={image}/>
                </div>
                <ul className="navbar-ul">
                    <li><a href="">Home</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Contact</a></li>


                </ul>
            </div>
        </nav>
    )
}

export default Navbar
