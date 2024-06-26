import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import thanhguom from "/FE_CGV/fecenima/src/img/thanhguom.png";
import panda from "/FE_CGV/fecenima/src/img/panda.jpg";
import mai from "/FE_CGV/fecenima/src/img/mai.jpg";
import chibau from "/FE_CGV/fecenima/src/img/chibau.png";
import madam from "/FE_CGV/fecenima/src/img/madam.jpg";
let data = [
    {
        img : mai,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : chibau,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img :madam,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : panda,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : thanhguom,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`