import React from "react";
import { useState } from "react";
import AnimalsShow from "./components/AnimalsShow";
import "./App.css";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "horse", "gator"];

  return animals[Math.floor(Math.random() * animals.length)];
}

const App = () => {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, idx) => {
    return <AnimalsShow type={animal} key={idx} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
};

export default App;
