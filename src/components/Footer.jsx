import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FB from '../assets/image/png/Vector_fb.png'
import Twitter from '../assets/image/png/Twitter.png'
import Telegram from '../assets/image/png/Tallegram.png'
import circle_right3 from "../assets/image/png/Haff_img_right.png";
import { Link } from 'react-router-dom' 

const Footer = () => {
  return (
    <section className='bg-black Footer_Moon position-relative'id='Tokens'>
 <div className="position-absolute circle_right3 d-sm-block d-none ">
      <img src={circle_right3} alt="#" />
      </div>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6}data-aos="fade-right" data-aos-duration="2000">
                    <p className='fw-bold text_ffffff fs-xl ff-recharge'>Ready to get started <span className='d-block sky-green'> Talk to us Today</span>
                       </p>
                </Col>
                <Col lg={6}data-aos="fade-left" data-aos-duration="2000">
                    <div className='justify-content-lg-end d-flex pe-5'>
                    <button className='Button_F'>Get Started</button>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container className='py-4'>
            <Row>
                <Col lg={6} className='mt-4'data-aos="fade-up-right"data-aos-duration="2000">
                    <p className='fs-xsm text_ffffff fw-bold opacity ff-recharge'>Nullam viverra natoque amet et <span className='d-block'> sed scelerisque viverra fringilla</span> platea. Ullamcorper.</p>
                    <div className='gap-2 d-flex'>
                     <a href="https://facebook.com/"><img src={FB} alt="#" /></a>
                     <a href="https://twitter.com/"><img src={Twitter} alt="#" /></a>
                     <a href="https://telegram.com/"><img src={Telegram} alt="#" /></a>
                     </div>
                </Col>
                <Col lg={6} className='mt-4 mt-lg-0'data-aos="fade-up-left"data-aos-duration="2000">
                    <Row className=' align-items-start justify-content-lg-end '>
                        <Col sm={4} xs={6}>
                        <h1 className='text_ffffff fw-bold fs-sm ff-recharge'>Quick links</h1>
                      <ul className='p-0'>
                        <li className='mb-2'><Link className='fs-xsm text_ffffff fw-bold opacity ff-recharge'>Home</Link></li>
                        <li className='mb-2'><Link className='fs-xsm text_ffffff fw-bold opacity ff-recharge'>Features</Link></li>
                        <li className='mb-2'><Link className='fs-xsm text_ffffff fw-bold opacity ff-recharge'>Marketplace</Link></li>
                        <li className='mb-2'><Link className='fs-xsm text_ffffff fw-bold opacity ff-recharge'>Tokens</Link></li>
                        <li className='mb-2'><Link className='fs-xsm text_ffffff fw-bold opacity ff-recharge'>NexChat</Link></li>
                        <li><Link className='fs-xsm text_ffffff fw-bold opacity ff-recharge'>About</Link></li>
                      </ul>
                        </Col>
                        <Col sm={4} xs={6}>
                         <h1 className='text_ffffff fw-bold fs-sm ff-recharge'>Information's</h1>
                         <ul className='p-0'>
                            <li className='mb-2'><Link className='fs-xsm text_ffffff fw-bold opacity ff-recharge'>Contact</Link></li>
                            <li className='mb-2'><Link className='fs-xsm text_ffffff fw-bold opacity ff-recharge'>Phone</Link></li>
                            <li className='mb-2'><Link className='fs-xsm text_ffffff fw-bold opacity ff-recharge'>terms</Link></li>
                            <li><Link className='fs-xsm text_ffffff fw-bold opacity  ff-recharge'>Privacy</Link></li>
                         </ul>
                        </Col>
                   </Row>
                </Col>
            </Row>

            <hr className='line_footer' />
            <h2 className='text-center fs-xsm text_ffffff fw-bold opacity ff-recharge'>@Copyright.nexai</h2>
        </Container>
    </section>
  )
}

export default Footer