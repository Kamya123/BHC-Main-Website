import React from 'react'

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineClose } from 'react-icons/md';
import { AiFillCaretBottom } from 'react-icons/ai';

import './navBar.css';
import { links, logInLi } from '../../data'
import Logo from '../../assets/images/img_untitleddesign.png';
import { Line } from '../line/Line';



const NavBar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
    const [isLogInLiShowing, setisLogInLiShowing] = useState(false);

    return (
        <nav>
            <div className="container nav_container">

                {/* Since, we are using React Dom, we will use Link for the link and NavLink for the Nav linking, which is gong to some special styling in our page */}

                <Link to="/" className='logo nav_logo' onClick={() => setIsNavShowing(false)} >
                    <img src={Logo} alt="Nav Logo" />
                    <Line className="vertical_line" />
                    <p className='nav_logo-text'>Bridge HealthCare <br /> Private Limited</p>
                </Link>

                <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)} > {name} </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>

                {/* <button className='btn logIn' >Log In <FaChevronDown className='logIn_icon' /></button> */}

                <ul className={`logIn_li ${isLogInLiShowing ? 'show_logInLi' : 'hide_logInLi'}`}>
                    {
                        logInLi.map(({ name, path }, index) => {
                            return (
                                <li key={index} >
                                    <NavLink to={path} className={({ isActive }) => isActive ? 'active-pop' : ''} onClick={() => setisLogInLiShowing(prev => !prev)} > {name} </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>

                <button className='btn logIn' onClick={() => setisLogInLiShowing(prev => !prev)} >Log In
                    {
                        isLogInLiShowing ? <FaChevronUp className='logIn_icon' /> : <FaChevronDown className='logIn_icon' />
                    }
                </button>

                <button className='nav_toggle-btn' onClick={() => setIsNavShowing(prev => !prev)} >
                    {
                        isNavShowing ? <MdOutlineClose /> : <FaBars />
                    }
                </button>
            </div>
        </nav>
    )
}

export default NavBar
