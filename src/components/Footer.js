import React from 'react';
import { FaFacebook, FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <h4><FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                    Bangaluru,KA</h4>
            </div>
            <div className='phone'>
                <h4> <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                    +91-9123183100</h4>
            </div>
            <div className='email'>
                <h4> <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                    mohitsourav7@gmail.com</h4>
            </div>
        </div>
    </div>
    <div className='right'>
        <div className='social'>
            <FaFacebook size={20} style={{ color: '#fff', marginRight: '1rem' }} />

            <FaInstagram size={20} style={{ color: '#fff', marginRight: '1rem' }} />

            <FaLinkedinIn size={20} style={{ color: '#fff', marginRight: '1rem' }} />
        </div>
    </div>
</div>
  )
}

export default Footer