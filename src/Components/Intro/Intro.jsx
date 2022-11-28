import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkdediIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
// import glasses from "../../img/glasses.png";
import FlotingDiv from "../FlotingDiv/FlotingDiv";


const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy ! I Am</span>
          <span>Nadeem Khan</span>
          <span>
            I am Front-End Developer with High level Exprience in web designing and
            development, prducting the Quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkdediIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>

      <div className="i-rigth">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FlotingDiv image={Crown} text1="Web" text2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FlotingDiv image={thumbup} text1="Best Design" text2="Award" />
        </div>
        <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
        <div className="blur" style={{background:"#C1F5FF",top:"17rem",width:"21rem",height:"11rem",left:"-9rem"}}></div>
      </div>
    </div>
  );
};

export default Intro;
