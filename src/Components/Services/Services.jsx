import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "../../img/Khan Resume.pdf"
const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <spane>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          <br />
          ipsam at? Id sed dolorem laboriosam omnis quo quia!
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* rigth side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photshop, Adobe, Adobe xd"}
          />
        </div>
        {/* second Card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html,Css,React,Javascript"}
          />
        </div>
        {/* third Crad */}
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UX/UI"}
            detail={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, omnis!"
            }
          />
        </div>
        <div className="blur s-blur2" style={{background:"var(--purple"}}></div>
      </div>
    </div>
  );
};

export default Services;
