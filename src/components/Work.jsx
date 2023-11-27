import React, { useState, useEffect } from "react";
import "./Work.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Work = () => {
  const images = [
    "https://images.unsplash.com/photo-1695068545577-60fc2d9768f2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDk3MTE5NA&ixlib=rb-4.0.3&q=80&w=1280",
    "https://images.unsplash.com/photo-1698273522996-2fa04ebbabbd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDk3MTIwNQ&ixlib=rb-4.0.3&q=80&w=1280",
    "https://images.unsplash.com/photo-1691425266385-31dfd2603cca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDk3MTI5NQ&ixlib=rb-4.0.3&q=80&w=1280",
    "https://images.unsplash.com/photo-1699478761943-ed4f5330c71e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDk3MTgzMg&ixlib=rb-4.0.3&q=80&w=1280",
  ];

  useEffect(() => {
    carouselDefault();
  }, []);

  let count = 0;

  const getImageElements = () => document.querySelectorAll(".carousel-image");

  const carouselDefault = () => {
    const imageElements = getImageElements();
    imageElements.forEach((imageElement, index) => {
      imageElement.style.left = `${100 * index}%`;
    });
  };

  const slideImage = () => {
    const imageElements = getImageElements();
    imageElements.forEach((imageElement) => {
      imageElement.style.transform = `translateX(-${100 * count}%)`;
    });
  };

  const slideLeft = () => {
    if (count > 0) {
      count--;
    }
    slideImage();
  };

  const slideRight = () => {
    const lastCount = getImageElements().length - 1;
    if (count < lastCount) {
      count++;
    } else {
      count = 0;
    }
    slideImage();
  };

  return (
    <div className="work-container" id="work">
      <div className="carousel">
        <h1 className="carousel-title">Work Gallery</h1>
        <button className="left carousel-btn" type="button" onClick={slideLeft}>
          <IoIosArrowBack />
          <span className="carousel-btn-text">Back</span>
        </button>
        <div className="carousel-images">
          {images.map((image, index) => (
            <img
              src={image}
              alt={`My work demo ${index + 1}`}
              className="carousel-image"
              key={index}
            />
          ))}
        </div>
        <button
          className="right carousel-btn"
          type="button"
          onClick={slideRight}
        >
          <span className="carousel-btn-text">Next</span>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Work;
