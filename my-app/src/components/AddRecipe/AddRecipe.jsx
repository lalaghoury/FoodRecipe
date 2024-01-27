import React from "react";
import "./AddRecipe.scss";
import RecipeForm from "./RecipeForm";
import { useAddRecipe } from "../../context/AddRecipeContext";
import { Link } from "react-router-dom";

function AddRecipe() {
  return (
    <div className="add-recipe">
      <div className="add-heading">
        <h1>Create new recipe</h1>
        <Link to="/test" className="btn bg-primary text-white">
          Next
        </Link>
      </div>
      <div className="add-form">
        <RecipeForm />
      </div>
    </div>
  );
}

export default AddRecipe;
