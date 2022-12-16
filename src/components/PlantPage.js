import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantData, setPlantData}) {
  
  const [search, setSearch] = useState("")
  const [newPlant, setNewPlant] = useState([])

  let filteredPlantData = plantData.filter((eachPlant) => {
          if (search === "") {
            return true
          }

          else if (eachPlant.name.toLowerCase().includes(search.toLocaleLowerCase()))
                {
                  return eachPlant;
                }
                

          return false;
  })

  console.log(filteredPlantData);
  
function handleNewPlant(newPlant){
  setPlantData([...plantData, newPlant])

}

  
  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant} 
                    newPlant={newPlant} 
                    setNewPlant={setNewPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList filteredPlantData={filteredPlantData} />
    </main>
  );
}

export default PlantPage;
