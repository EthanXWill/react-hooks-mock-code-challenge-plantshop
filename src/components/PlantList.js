import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data)
      });
  }, []);

  return (
    <ul className="cards">
      {plants.map((plant) => {
        return (
          <PlantCard 
            key={plant.id}
            plant={plant}
          }
        )
      })}
      <PlantCard />
    </ul>
  );
}

export default PlantList;
