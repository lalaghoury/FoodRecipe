import React from "react";
import { useAddRecipe } from "../../context/AddRecipeContext";
import "./RecipeListing.scss";
import { Button } from "antd";

function RecipeListing() {
  const { getAllRecepies } = useAddRecipe();
  const recepies = getAllRecepies();
  return (
    <div className="recipe-listing-wrapper">
      {recepies.map((recepie) => (
        <div key={recepie.id} className="recipe-card">
          <h1>{recepie.title}</h1>
          <div className="recipe-card-img">
            <img src='https://source.unsplash.com/random' alt="img" />
          </div>
          <div className="recipe-card-text">
            <p>{recepie.description}</p>
            <Button className="text-white bg-primary next">Learn More.</Button>
          </div>
          {/* <div className="recipe-card-text">
            <h1 className="font-24 text-black">{recepie.title}</h1>
            <p>{recepie.description}</p>
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default RecipeListing;
