import AnimalShow from "./AnimalShow";
import { useState } from "react";

function getRandomAnimal() {
  const animals = ["bird", "cat", "dog", "cow", "aligator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>
        <AnimalShow />
      </div>
    </div>
  );
}
export default App;
