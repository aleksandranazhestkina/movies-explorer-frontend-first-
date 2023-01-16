import React from "react";
import Promo from "../Promo/Promo.jsx";
import AboutProject from "../AboutProject/AboutProject.jsx";
import Techs from "../Techs/Techs.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import "./Main.css";

export default function Main() {
    return (
        <main className="main">
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </main>
    )
}
