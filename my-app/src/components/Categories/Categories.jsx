import React from "react";
import "./Categories.scss";
import { useRecipe } from "../../context/RecipeContext";

function Categories() {
  const { data } = useRecipe();
  return (
    <div className="categories-container">
      <div className="common-heading">
        <h1 className="text-black font-48">Categories</h1>
        <span className="text-primary">View more</span>
      </div>

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
    </div>
  );
}

export default Categories;
