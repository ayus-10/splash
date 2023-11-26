import React from "react";
import "./Work.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Work = () => {
  const images = [
    "https://images.unsplash.com/photo-1695068545577-60fc2d9768f2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDk3MTE5NA&ixlib=rb-4.0.3&q=80&w=1280",
    "https://images.unsplash.com/photo-1698273522996-2fa04ebbabbd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDk3MTIwNQ&ixlib=rb-4.0.3&q=80&w=1280",
    "https://images.unsplash.com/photo-1691425266385-31dfd2603cca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDk3MTI5NQ&ixlib=rb-4.0.3&q=80&w=1280",
    "https://images.unsplash.com/photo-1699478761943-ed4f5330c71e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDk3MTgzMg&ixlib=rb-4.0.3&q=80&w=1280",
    "https://images.unsplash.com/photo-1695010836103-49554166d064?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDk3MTI5Nw&ixlib=rb-4.0.3&q=80&w=1280",
  ];

  return (
    <div className="work-container" id="work">
      <div className="carousel">
        <button className="left carousel-btn">
          <IoIosArrowBack />
        </button>
        <div className="carousel-images">
          {images.map((image) => (
            <img src={image} alt="My work demo" className="carousel-image" />
          ))}
        </div>
        <button className="right carousel-btn">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Work;
