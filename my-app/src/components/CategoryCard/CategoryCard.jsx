import React from "react";
import "./CategoryCard.scss";
import { useRecipe } from "../../context/RecipeContext";

function CategoryCard() {
  const { data } = useRecipe();

  return (
    <div className="categories-wrapper">
      {data.map((item, index) =>
        item.categoryimage !== "" ? (
          <div key={index} className="category-card">
            <div className="category-card-img">
              <img src={item.categoryimage} alt="img" />
            </div>
            <div className="category-card-text">
              <h3>{item.categoryname}</h3>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default CategoryCard;
