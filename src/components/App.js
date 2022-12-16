import React, {  useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  
  
  const [plantData, setPlantData] = useState([])
  
  useEffect(() => {
  fetch(`http://localhost:6001/plants`)
  .then((response) => response.json())
  .then((data) => setPlantData(data))
  }, 
    [])

    
     
  
  return (
    <div className="app">
      <Header />
      <PlantPage plantData={plantData} setPlantData={setPlantData}/>
    </div>
  );
}

export default App;
