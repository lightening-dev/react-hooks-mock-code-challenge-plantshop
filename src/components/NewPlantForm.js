import React, {useState} from "react";

function NewPlantForm({ handleNewPlant }) {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(null);
  
  function updatingNewPlant(e) {
    e.preventDefault();

      const newPlantData = {
        name: name,
        image: image,
        price: price,
      };
      fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlantData),
  })
    .then((r) => r.json())
    .then((data) => handleNewPlant(data));
  }



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={updatingNewPlant}>
        <input onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Plant name" />
        <input onChange={(e) => setImage(e.target.value)} type="text" name="image" placeholder="Image URL" />
        <input onChange={(e) => setPrice(e.target.value)}type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
