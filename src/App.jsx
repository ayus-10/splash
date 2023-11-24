import React from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      <Nav />
      <main className="wrapper">
        <Hero />
      </main>
    </>
  );
};

export default App;
