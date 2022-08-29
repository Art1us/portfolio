import React from "react";
import Service from "./Service";
import "../styles/Carousel.css";

function Carousel() {
  return (
    <div className="carousel">
      <input className="carousel__input" type="radio" name="position" checked />
      <input className="carousel__input" type="radio" name="position" checked />
      <input className="carousel__input" type="radio" name="position" checked />
      <input className="carousel__input" type="radio" name="position" checked />
      <input className="carousel__input" type="radio" name="position" checked />

      <div className="carousel__container">
        <div className="carousel__item">
          <Service img={require("../img/icons/html.png")} name="html" />
        </div>
        <div className="carousel__item">
          <Service img={require("../img/icons/css.png")} name="css" />
        </div>
        
        <div className="carousel__item">
          <Service img={require("../img/icons/js.png")} name="js" />
        </div>
        <div className="carousel__item">
          <Service img={require("../img/icons/react2.png")} name="react" />
        </div>
        <div className="carousel__item">
          <Service img={require("../img/icons/redux.png")} name="redux" />
        </div>
        
      </div>
    </div>
  );
}

export default Carousel;
