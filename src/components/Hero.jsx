import React from "react";
import "./Hero.css";
import image from "../assets/portrait.jpg";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="hero-container" id="home">
      <div className="hero-image">
        <img className="image" src={image} alt="My portrait" />
      </div>
      <div className="about-text">
        <h2>Welcome to my Portfolio</h2>
        <h1>Hi, its Josef Lehrer.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          fugit alias ut architecto quas soluta tenetur illum nesciunt
          laboriosam ipsam. Aliquam hic eaque cupiditate molestiae fugit
          nesciunt nulla sit. Magnam impedit natus facere, aperiam fugit totam
          laborum beatae. Voluptas laboriosam quia omnis quisquam natus
          adipisci? Eligendi, commodi.
        </p>
        <button className="hero-btn" type="button">
          <span className="hero-btn-icon">
            <IoIosArrowForward />
          </span>
          <span className="hero-btn-text">Work with me</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
