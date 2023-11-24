import React from "react";
import "./Hero.css";
import image from "../assets/portrait.jpg";

const Hero = () => {
  return (
    <div className="container">
      <div className="image-div">
        <img className="image" src={image} alt="my-portrait" />
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
        <button className="btn">
          <span className="btn-icon">&rArr;</span>
          <span className="btn-text">Work with me</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
