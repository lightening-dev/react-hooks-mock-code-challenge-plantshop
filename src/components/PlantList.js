import React from "react";
import PlantCard from "./PlantCard";

function PlantList({filteredPlantData}) {

  const plants = filteredPlantData.map((eachPlant) => {
   return ( <PlantCard
      name={eachPlant.name}
      alt ={eachPlant.name}
      id={eachPlant.id}
      image={eachPlant.image}
      price={eachPlant.price}/>
  )
      })

  return (
    <ul className="cards">{plants}</ul>
  );
}

export default PlantList;
