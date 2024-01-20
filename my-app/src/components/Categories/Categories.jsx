import React from "react";
import "./Categories.scss";
import CategoryCard from "../CategoryCard/CategoryCard";

function Categories() {
  return (
    <div className="categories-container">
      <div className="common-heading">
        <h1 className="text-black font-48">Categories</h1>
        <span className="text-primary">View more</span>
      </div>
      <CategoryCard />
    </div>
  );
}

export default Categories;
