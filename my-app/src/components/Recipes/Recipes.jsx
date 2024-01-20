import React from "react";
import "./Recipes.scss";
import Card from "../Card/Card";

function Recipes() {
  return (
    <div className="recipes">
      <div className="s-r">
        <span className="s-r-1">Home &gt; </span>
        <span className="s-r-2">Recipes</span>
      </div>
      <div className="recipes-heading">
        <h1 className="text-black font-48">Blog</h1>
        <span className="text-black">
          Sort by:
          <select className="dropdown">
            <option value="A-to-Z">A to Z</option>
            <option selected value="Relevance">
              Relevance
            </option>
            <option value="Newest">Newest</option>
            <option value="Top-Rated">Top Rated</option>
          </select>
        </span>
      </div>
      <hr />
      <Card />
      <Card />

      <div className="r-l-m">

      <button className="btn bg-primary">Load More</button>
      </div>
      
    </div>
  );
}

export default Recipes;
