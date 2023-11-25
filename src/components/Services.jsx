import React from "react";
import "./Services.css";
import { FaImagePortrait } from "react-icons/fa6";
import { RiCalendarEventLine } from "react-icons/ri";
import {
  MdEditSquare,
  MdPets,
  MdOutlineSettingsSuggest,
  MdBusinessCenter,
  MdCamera,
} from "react-icons/md";
import { TbDrone } from "react-icons/tb";

const Services = () => {
  const servicesList = [
    {
      name: "Portrait Photography",
      icon: <FaImagePortrait />,
    },
    {
      name: "Event Photography",
      icon: <RiCalendarEventLine />,
    },
    {
      name: "Commercial Photography",
      icon: <MdBusinessCenter />,
    },
    {
      name: "Pet Photography",
      icon: <MdPets />,
    },
    {
      name: "Social Media Content",
      icon: <MdCamera />,
    },
    {
      name: "Photo Editing",
      icon: <MdEditSquare />,
    },
    {
      name: "Drone Photography",
      icon: <TbDrone />,
    },
    {
      name: "Custom Packages",
      icon: <MdOutlineSettingsSuggest />,
    },
  ];

  return (
    <div className="services-container" id="services">
      <h1 className="services-title">My Services</h1>
      <ul className="services-list">
        {servicesList.map((serviceItem) => (
          <li className="list-item">
            <span className="list-item-icon">{serviceItem.icon}</span>
            <span className="list-item-text">{serviceItem.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
