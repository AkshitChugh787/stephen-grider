import React from "react";
import bird from "../assets/bird.svg";
import cat from "../assets/cat.svg";
import cow from "../assets/cow.svg";
import dog from "../assets/dog.svg";
import gator from "../assets/gator.svg";
import heart from "../assets/heart.svg";
import horse from "../assets/horse.svg";
import { useState } from "react";
import "./AnimalsShow.css";

const svgMap = {
  cat,
  bird,
  cow,
  dog,
  gator,
  heart,
  horse,
};

const AnimalsShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks }}
      />
    </div>
  );
};

export default AnimalsShow;
