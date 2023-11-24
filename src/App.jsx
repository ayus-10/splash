import React, { useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("home");
  const changeActiveComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <>
      <Nav onButtonClick={changeActiveComponent} />
      <main className="wrapper">
        {activeComponent === "home" && <Hero />}
        {activeComponent === "services" && <Services />}
        {activeComponent === "work" && <Work />}
        {activeComponent === "contact" && <Contact />}
      </main>
    </>
  );
};

export default App;
