import React from "react";
import "./CategoriesPage.scss";
import Card1 from "../../components/Card1/Card1";

function CategoryPage() {
  return (
    <div className="category-page">
      <div className="s-r">
        <span className="s-r-1">Home &gt; </span>
        <span className="s-r-2">Category</span>
      </div>
      <Card1 />
      <Card1 />
    </div>
  );
}

export default CategoryPage;
