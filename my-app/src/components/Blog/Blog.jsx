import React from "react";
import "./Blog.scss";
import { useRecipe } from "../../context/RecipeContext";

function Blog() {
  const { data } = useRecipe();
  return (
    <div className="blog-container">
      <div className="common-heading">
        <h1 className="text-black font-48">Blog</h1>
        <span className="text-primary">View more</span>
      </div>
      <div className="blog-posts">
        {data.map((item, index) =>
          item.blogimage ? (
            <div key={index} className="blog-card">
              <div className="blog-card-img">
                <img src={item.blogimage} alt="img" />
              </div>
              <div className="blog-card-text">
                <h1 className="font-24 text-black">{item.blogheading}</h1>
                <p>{item.blogslogan}</p>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Blog;
