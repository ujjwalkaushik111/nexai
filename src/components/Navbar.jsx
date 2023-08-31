import React, { useState } from 'react'
import nexailogo from '../assets/image/png/nexai_logo.png'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'


const Navbar = () => {
    const [showNavbar, setShowNavbar] =useState(true);
    if (showNavbar) {
        document.body.classList.remove('overflow_hidden');
    } else {
        document.body.classList.add('overflow_hidden')
    }
  return (
    <section className='Hero_img min-vh-100 flex-column d-flex '>
        <header className='pt-3'>
        <Container>
                    <nav className='d-flex align-items-center justify-content-between'>
                            <img className='pe-sm-5 me-sm-5' src={nexailogo} alt="logo" />
                            <ul className={showNavbar ? 'd-flex align-items-center gap-5 mb-0 nav_sm' : 'd-flex align-items-center gap-5 mb-0 nav_sm nav_show'} >
                                <li><a href='#Home' className='ff-poppins fs-xsm text_ffffff fw-normal link'>Home</a></li>
                                <li><a href='#Marketplace' className='ff-poppins fs-xsm text_ffffff fw-normal link'>Marketplace</a></li>
                                <li><a href='#About' className='ff-poppins fs-xsm text_ffffff fw-normal link'>About</a></li>
                                <li><a href='#NexChat' className='ff-poppins fs-xsm text_ffffff fw-normal link'>NexChat</a></li>
                                <li><a href='#Tokens' className='ff-poppins fs-xsm text_ffffff fw-normal link'>Tokens</a></li>
                                <li><button className='Button_F d-lg-none'>Sign Up</button></li>
                                <span title="close" className="ms-4 close_nav text-white fw-bold fs-1 d-lg-none" onClick={() => setShowNavbar(true)}>&times;</span>
                            </ul>
                                <li><button className='Button_F d-lg-block d-none'>Sign Up</button></li>
                            <span title="open"
                            className="d-inline d-lg-none fw-bold fs-1 text-white"
                            onClick={() => setShowNavbar(false)}>
                            &#9776; </span>
                    </nav>
                </Container>
        </header>
        <div className='d-flex align-items-center flex-grow-1'>
            <Container>
            <div className='ms-sm-5 ps-sm-5'>
                 <h1 className='fs-2xl text_ffffff fw-bold pt-4 ff-recharge '>
                   <span className='sky-green'>Nexai</span> is an <span className='d-lg-block'>advanced AI-</span>powered home <span className='d-lg-block'>assistant</span>
                </h1>
                <p className='text_ffffff fs-xsm ff-poppins fw-normal '>Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
                <button className='Button_F mt-5'>Know More</button> 
            </div>
            </Container>
       </div>
    </section>
  )
}

export default Navbar