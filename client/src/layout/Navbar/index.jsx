import React from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
    return (
        <nav id='navbar'>
            <div className="container">
                <div className="navbox">
                    <div className="navleft">
                        <img src="https://preview.colorlib.com/theme/aroma/img/logo.png.webp" alt="" />
                    </div>
                    <div className="navmid">
                        <span><NavLink activeClassName="" to="/">Home</NavLink></span>
                        <span><NavLink to="/">Shop</NavLink></span>
                        <span><NavLink to="/">Blog</NavLink></span>
                        <span><NavLink to="/">Pages</NavLink></span>
                        <span><NavLink to="/">Contact</NavLink></span>
                    </div>
                    <div className="navright">
                        <div className='icons'>
                            <span><HiMagnifyingGlass /></span>
                            <span><IoCartOutline /></span>
                        </div>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
