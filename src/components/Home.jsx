import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img2 from '../assets/image/png/Artboard.png'
import slide_1 from "../assets/image/png/slide_1.png";
import slide_2 from "../assets/image/png/slide_2.png";

const Home = () => {
  return (
    <section className='bg-black py-5 px-sm-5 px-2'id='Home'>
        <Container className='py-5 my-5'>
            <Row>
                <Col lg={6} data-aos="fade-right" data-aos-duration="1500">
                    <img className='w-100' src={img2} alt="#" />
                </Col>
                <Col lg={6} data-aos="fade-left" data-aos-duration="1500">
                <div className='fw-bold fs-xl sky-green ff-recharge'>Ai-Powered Home Assistant</div>
                <p className='fw-normal text_ffffff fs-xsm ff-poppins opacity'>Nexai is an advanced AI-powered home assistant that brings the future to your fingertips. With its ability to engage in natural, fluent conversations in over 15 languages,</p>
                 <p className='fw-normal text_ffffff fs-xsm ff-poppins opacity'>Nexai offers an incredibly futuristic experience. It can take the initiative to ask about your day, schedule meetings, provide timely reminders</p>
                 <p className='fw-normal text_ffffff fs-xsm ff-poppins opacity'>assist with cooking by suggesting ingredients, track your fitness and nutrition goals, and even handle bill payments.</p>
                <button className='Button_F mt-4'>Learn More</button>
                </Col>
            </Row>
        </Container>
        <Container fluid  className="bg_img_service">
        <Container>
        <div>
       <div className="py-5"data-aos="fade-left" data-aos-duration="1000">
        <h2 className="fw-bold ff-recharge fs-xl text_ffffff text-center">Unique features</h2>
        <p className="text_ffffff fs-xsm ff-poppins fw-normal opacity text-center">ability to engage in natural, fluent conversations <span className="d-block">in over 15 languages,</span> </p>
        </div>
        <div className="Height-over22 overflow-y-scroll">
        <Row className="py-5 w-100"> 
          <Col lg={6} data-aos="fade-right" data-aos-duration="2000">
            <div className='d-flex justify-content-lg-start justify-content-center py-5 py-lg-0'>
            <div className="Access-box p-4 rounded-4">
              <img className="mt-2" src={slide_1} alt="#" />
              <h2 className="fw-bold ff-recharge fs-xmd approx-black mt-4">Remote Access and File Management</h2>
              <p className="fs-poppins fs-xsm fw-normal opacity approx-black"> Imagine you're at work, and you realize <span className="d-block"> you forgot to bring an important file</span> stored on your desktop computer at <span className="d-block">home. No worries! Simply open the</span> Nexai app on your phone, initiate a call <span className="d-block"> with Nexai, and request access to your</span> computer. </p>
            </div>
            </div>
          </Col>
          <Col lg={6}></Col>
          <Col lg={6}></Col>
          <Col lg={6} className="d-flex justify-content-lg-end justify-content-center margin_box pt-5 py-lg-0 mb-4 mb-lg-0"data-aos="fade-left" data-aos-duration="2000">
          <div className="Access-box p-3 rounded-4 ">
          <img className="mt-3" src={slide_2} alt="#" />
              <h2 className="fw-bold ff-recharge fs-xmd approx-black mt-4">Real-time Home Monitoring</h2>
              <p  className="fs-poppins fs-xsm fw-normal opacity approx-black">While you're out with your family, you may wonder if you remembered to turn off the stove. Thanks to Nexai, this is no longer a concern. Using the Nexai app, you can initiate a video call with Nexai and activate the mini drone stationed in your home. </p>
            </div>
          </Col>
          <Col lg={6} >
          <div className='d-flex justify-content-lg-start justify-content-center pb-5 py-lg-0'>
            <div className="Access-box p-4 rounded-4">
              <img className="mt-2" src={slide_1} alt="#" />
              <h2 className="fw-bold ff-recharge fs-xmd approx-black mt-4">Remote Access and File Management</h2>
              <p className="fs-poppins fs-xsm fw-normal opacity approx-black"> Imagine you're at work, and you realize <span className="d-block"> you forgot to bring an important file</span> stored on your desktop computer at <span className="d-block">home. No worries! Simply open the</span> Nexai app on your phone, initiate a call <span className="d-block"> with Nexai, and request access to your</span> computer. </p>
            </div>
            </div>
          </Col>
          <Col lg={6}></Col>
          <Col lg={6}></Col>
          <Col lg={6} className="d-flex justify-content-lg-end justify-content-center margin_box py-5 py-lg-0">
          <div className="Access-box p-3 rounded-4 ">
          <img className="mt-3" src={slide_2} alt="#" />
              <h2 className="fw-bold ff-recharge fs-xmd approx-black mt-4">Real-time Home Monitoring</h2>
              <p  className="fs-poppins fs-xsm fw-normal opacity approx-black">While you're out with your family, you may wonder if you remembered to turn off the stove. Thanks to Nexai, this is no longer a concern. Using the Nexai app, you can initiate a video call with Nexai and activate the mini drone stationed in your home. </p>
            </div>
          </Col>
        </Row>
        </div>
       
        </div>
        </Container>
      </Container>
    </section>
    )
}

export default Home