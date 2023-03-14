import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import './footer.css';
import Logo from '../../assets/images/img_untitleddesign.png';
import { Line } from '../line/Line';



const Footer = () => {
  return (
    <footer className='footer_container'>
      <div className="footer_content flex items-center">
        <div className="container flex justify-between">

          <div className="item-1st">

            <Link to="/" className='logo nav_logo' >
              <img src={Logo} alt="Nav Logo" />
              <Line className="vertical_line" />
              <p className='nav_logo-text'>Bridge HealthCare <br /> Private Limited</p>
            </Link>

            <p className='text-lg footer-logo-text'>Empowering people and the community for healthy life  </p>

            <div className='icons flex flex-row'>
              <a href='#' className='icons_elt'>
                <FaFacebookF />
              </a>
              <a href='#' className='icons_elt'>
                <FaTwitter />
              </a>
              <a href='#' className='icons_elt'>
                <FaLinkedinIn />
              </a>
            </div>

          </div>

          <div className="items-link">
            <h3>Our link</h3>
            <ul>
              <li>About Us</li>
              <li>Find Doctor</li>
            </ul>
          </div>

          <div className="items-link">
            <h3>Your Account</h3>
            <ul>
              <li>LogIn/SignUp</li>
              <li>Contact</li>
            </ul>
          </div>

        </div>
      </div>

      {/* <div className="copyright flex items-center">
        <div className="container flex justify-between">
          <p>© Copyright 2022 Laso Soins Accessibles.</p>
          <ul className='flex gap-8'>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
          </ul>
        </div>
      </div> */}
    </footer>
  )
}

export default Footer
