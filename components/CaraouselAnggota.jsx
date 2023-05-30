'use client'
import CardCarousel from './CardCarousel'

import React, { Component } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    ><IoIosArrowForward style={{ ...style, color: "#008797", fontSize: "30px", }} /></div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    ><IoIosArrowBack style={{ ...style, color: "#008797", fontSize: "30px", }} /></div>
  );
}

export const CaraouselAnggota = () => {
  // return (
  //   <div className='grid grid-col grid-cols-3 flex-between'>
  //     <CardCarousel />
  //     <CardCarousel />
  //     <CardCarousel />
  //   </div>
  // )

    var settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      swipeToSlide: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 750,
      cssEase: "linear",
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}`
        );
      }
    };
    return (
      <div className='pb-6 lg:w-[1024px] mx-auto '>
        <Slider {...settings}>
          <CardCarousel />
          <CardCarousel />
          <CardCarousel />
          <CardCarousel />
          <CardCarousel />
        </Slider>
      </div>
      
    );
  }

export default CaraouselAnggota