import React from "react";
import "./Card1.scss";
import { useRecipe } from "../../context/RecipeContext";

function Card1() {
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

export default Card1;
