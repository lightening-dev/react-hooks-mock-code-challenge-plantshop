import React, { useState } from "react";

function PlantCard({name, alt, id, image, price}) {
  
    const [toggle, setToggle] = useState(true);

    function handleToggle() {
      return setToggle(!toggle);
    }
  
  
  
  return (
    <li className="card" id={id}>
      <img src={image} alt={alt} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
       <button onClick={handleToggle}className="primary">{toggle ? "In Stock" : "Out of Stock"}</button>
      </li>
  );
}

export default PlantCard;