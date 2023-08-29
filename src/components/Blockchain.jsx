import React from "react";
import Slider from "react-slick";
import frame1 from "../assets/image/png/Frame_1.png";
import frame2 from "../assets/image/png/Frame_2.png";
import frame3 from "../assets/image/png/Frame_3.png";
import frame4 from "../assets/image/png/Frame_4.png";
import circle_right from "../assets/image/png/Haff_img_right.png";
import circle_left from "../assets/image/png/haff_img_left.png";

import { Col, Container, Row } from "react-bootstrap";

const Blockchain = () => {
  // slick-sliderstart
  const SliderFour = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 3000,
    slidesToShow: 2.99,
    slidesToScroll: 1,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1244,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  // End slick-slider
  // slick-sliderstart
  const Slider22 = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1244,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  // End slick-slider
  // slick-sliderstart
  const Slider33 = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    rtl: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1244,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  // End slick-slider
  // slick-sliderstart
  const Slider44 = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1244,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  // End slick-slider
  return (
    <section className="bg-black position-relative pt-5"id="Marketplace">
      <div className="position-absolute circle_right d-sm-block d-none ">
      <img src={circle_right} alt="#" />
      </div>
      <div className="overflow-hidden py-5"data-aos="fade-left" data-aos-duration="1000">
        <h2 className="fw-bold fs-xl sky-green text-center ff-recharge">
          Blockchain & AI technology
        </h2>
        <p className="fw-normal ff-poppins text_ffffff fs-xsm text-center opacity">
          Nexai is an advanced home assistant that will revolutionize the way we
          interact with our smart devices at home. Powered by
          <span className="d-block">
            sophisticated artificial intelligence, it leverages blockchain
            technology to offer a secure and efficient user experience.
          </span>{" "}
        </p>
        <div className="py-5 mt-5">
          <h2 className="text_ffffff fw-bold fs-xmd text-center ff-recharge">
            By building the software on blockchain, Nexai provides
            <span className="d-block">the following advantages</span>
          </h2>
        </div>

        <Slider {...SliderFour} className="py-5">
          <div className="d-flex justify-content-center">
            <img src={frame1} alt="#" />
          </div>
          <div className="d-flex justify-content-center pt-5 mt-5">
            <img className="mt-3" src={frame2} alt="#" />
          </div>
          <div className="d-flex justify-content-center">
            <img src={frame3} alt="#" />
          </div>
          <div className="d-flex justify-content-center pt-5 mt-5">
            <img className="mt-3" src={frame4} alt="#" />
          </div>
        </Slider>
      </div>
      <div className="overflow-hidden position-relative" data-aos="zoom-in-up"data-aos-duration="1500">
      <div className="position-absolute circle_left  d-sm-block d-none ">
      <img src={circle_left} alt="#" />
      </div>
        <div className="py-5 mt-5">
          <h2 className="fw-bold fs-xl sky-green text-center ff-recharge">
            NexAi does all this. And more.
          </h2>
          <p className="fw-normal ff-poppins text_ffffff fs-xsm text-center opacity pb-5 m-0">
            Nexai is an advanced home assistant that will revolutionize the way
            we interact with our smart devices at home.
            <span className="d-block">
              Powered by sophisticated artificial intelligence, it leverages
              blockchain technology to offer a secure and efficient
            </span>
            user experience.
          </p>
        </div>
        <Slider {...Slider22} className="py-5">
          <div className="ps-4 d-flex justify-content-center">
            <div className="Box-light">
              <h2 className="text_ffffff fw-bold fs-md ff-recharge">
                NexAi, Turn on <span className="d-block">light</span>
              </h2>
            </div>
          </div>
          <div className="ps-4 d-flex justify-content-center">
            <div className="Box-light">
              <h2 className="text_ffffff fw-bold fs-md ff-recharge">
                NexAi, set <span className="d-block">alarm of 5:00</span>
                am
              </h2>
            </div>
          </div>
          <div className="ps-4 d-flex justify-content-center">
            <div className="Box-light ">
              <h2 className="text_ffffff fw-bold fs-md ff-recharge">
                NexAi, measure <span className="d-block">this table</span>
              </h2>
            </div>
          </div>
          <div className="ps-4 d-flex justify-content-center">
            <div className="Box-light ">
              <h2 className="text_ffffff fw-bold fs-md ff-recharge">
                NexAi, Turn on<span className="d-block">music</span>
              </h2>
            </div>
          </div>
          <div className="ps-4 d-flex justify-content-center">
            <div className="Box-light ">
              <h2 className="text_ffffff fw-bold fs-md ff-recharge">
                NexAi, Turn on<span className="d-block">music</span>
              </h2>
            </div>
          </div>
        </Slider>
        <Slider {...Slider33} className="py-5">
          <div className="ps-4 d-flex justify-content-center">
            <div className="Box-light ">
              <h2 className="text_ffffff fw-bold fs-md ff-recharge">
                NexAi, measure <span className="d-block">this table</span>
              </h2>
            </div>
          </div>
          <div className="ps-4 d-flex justify-content-center">
            <div className="Box-light ">
              <h2 className="text_ffffff fw-bold fs-md ff-recharge">
                NexAi, Turn on <span className="d-block">music</span>
              </h2>
            </div>
          </div>
          <div className="ps-4 d-flex justify-content-center">
            <div className="Box-light ">
              <h2 className="text_ffffff fw-bold fs-md ff-recharge">
                NexAi, Turn<span className="d-block">on light</span>
              </h2>
            </div>
          </div>
          <div className="ps-4 d-flex justify-content-center">
            <div className="Box-light ">
              <h2 className="text_ffffff fw-bold fs-md ff-recharge">
                NexAi, is the front
                <span className="d-block">door locked?</span>
              </h2>
            </div>
          </div>
          <div className="ps-4 d-flex justify-content-center">
            <div className="Box-light ">
              <h2 className="text_ffffff fw-bold fs-md ff-recharge">
                NexAi, is the front
                <span className="d-block">door locked?</span>
              </h2>
            </div>
          </div>
        </Slider>
        <Slider {...Slider44} className="py-5">
          <div className="ps-4 d-flex justify-content-center">
            <div className="Box-light ">
              <h2 className="text_ffffff fw-bold fs-md ff-recharge">
                NexAi, Turn on <span className="d-block">TV</span>
              </h2>
            </div>
          </div>
          <div className="ps-4 d-flex justify-content-center">
            <div className="Box-light ">
              <h2 className="text_ffffff fw-bold fs-md ff-recharge">
                NexAi, Turn on <span className="d-block">music</span>
              </h2>
            </div>
          </div>
          <div className="ps-4 d-flex justify-content-center">
            <div className="Box-light ">
              <h2 className="text_ffffff fw-bold fs-md ff-recharge">
                NexAi, Turn of<span className="d-block">AC.</span>
              </h2>
            </div>
          </div>
          <div className="ps-4 d-flex justify-content-center">
            <div className="Box-light ">
              <h2 className="text_ffffff fw-bold fs-md ff-recharge">
                NexAi, Lock
                <span className="d-block">the front door</span>
              </h2>
            </div>
          </div>
          <div className="ps-4 d-flex justify-content-center">
            <div className="Box-light ">
              <h2 className="text_ffffff fw-bold fs-md ff-recharge">
                NexAi, Lock
                <span className="d-block">the front door</span>
              </h2>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Blockchain;
