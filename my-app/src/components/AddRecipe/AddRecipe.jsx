import React from "react";
import "./AddRecipe.scss";
import RecipeForm from "./RecipeForm";
import { useAddRecipe } from "../../context/AddRecipeContext";

function AddRecipe() {
  const { addRecepie } = useAddRecipe();
  return (
    <div className="add-recipe">
      <div className="add-heading">
        <h1>Create new recipe</h1>
        <button onClick={addRecepie} className="btn bg-primary text-white">
          Next
        </button>
      </div>
      <div className="add-form">
        <RecipeForm />
      </div>
    </div>
  );
}

export default AddRecipe;
