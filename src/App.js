import AnimalShow from "./AnimalShow";
import { useState } from "react";
import "./App.css";

function getRandomAnimal() {
  const animals = ["bird", "cat", "dog", "cow", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    if (animals.length < 6) {
      const newAnimal = getRandomAnimal();
      if (!animals.includes(newAnimal)) {
        setAnimals([...animals, newAnimal]);
      } else {
        handleClick();
      }
    } else {
      console.log("no more animals for you bitch !!");
    }
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
    </div>
  );
}
export default App;
