import React from "react";
import { useRecipe } from "../../context/RecipeContext";
import "./Card.scss";

function Card() {
  const { data } = useRecipe();
  return (
    <div className="card-wrapper">
      {data.map((item, _) =>
        item.name ? (
          <div key={item.id} className="card">
            <div className="card-parent">
              <img src={item.image} alt={item.name} className="card-image" />
              <div className="card-wishlist">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="26"
                  viewBox="0 0 30 26"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.2909 3.00977C17.2199 3.00977 13.2555 3.00977 6.18457 3.00977V22.9898L15.2681 19.2687L24.2909 22.9898V3.00977Z"
                    fill="#B55D51"
                    fill-opacity="0.972549"
                  />
                </svg>
              </div>
            </div>
            <div className="card-rating">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
              >
                <g clip-path="url(#clip0_613_9969)">
                  <path
                    d="M11.2924 12.6288L6.9611 9.65618L2.62981 12.6288L4.29284 7.82805L-0.0361328 4.87435H5.30852L6.9611 0.0654297L8.61368 4.87435H13.9578L9.62936 7.82805L11.2924 12.6288Z"
                    fill="#B55D51"
                    fill-opacity="0.972549"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_613_9969">
                    <rect width="13.9214" height="13" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
              >
                <g clip-path="url(#clip0_613_9969)">
                  <path
                    d="M11.2924 12.6288L6.9611 9.65618L2.62981 12.6288L4.29284 7.82805L-0.0361328 4.87435H5.30852L6.9611 0.0654297L8.61368 4.87435H13.9578L9.62936 7.82805L11.2924 12.6288Z"
                    fill="#B55D51"
                    fill-opacity="0.972549"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_613_9969">
                    <rect width="13.9214" height="13" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
              >
                <g clip-path="url(#clip0_613_9969)">
                  <path
                    d="M11.2924 12.6288L6.9611 9.65618L2.62981 12.6288L4.29284 7.82805L-0.0361328 4.87435H5.30852L6.9611 0.0654297L8.61368 4.87435H13.9578L9.62936 7.82805L11.2924 12.6288Z"
                    fill="#B55D51"
                    fill-opacity="0.972549"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_613_9969">
                    <rect width="13.9214" height="13" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
              >
                <g clip-path="url(#clip0_613_9969)">
                  <path
                    d="M11.2924 12.6288L6.9611 9.65618L2.62981 12.6288L4.29284 7.82805L-0.0361328 4.87435H5.30852L6.9611 0.0654297L8.61368 4.87435H13.9578L9.62936 7.82805L11.2924 12.6288Z"
                    fill="#B55D51"
                    fill-opacity="0.972549"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_613_9969">
                    <rect width="13.9214" height="13" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
              >
                <g clip-path="url(#clip0_613_11515)">
                  <path
                    d="M11.9779 12.6288L7.64665 9.65618L3.31536 12.6288L4.97838 7.82805L0.649414 4.87435H5.99406L7.64665 0.0654297L9.29923 4.87435H14.6433L10.3149 7.82805L11.9779 12.6288Z"
                    fill="#A5A5A5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_613_11515">
                    <rect
                      width="13.9214"
                      height="13"
                      fill="white"
                      transform="translate(0.685547)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className="font-16">{item.name} </h3>
            <div className="card-user">
              <span>
                <img src={item.userimage} alt="" />
                <h4>{item.username}</h4>
              </span>
              <span>
                <img
                  src="https://i.ibb.co/GVG0wC4/s-homepage-recipe-row-frame-1250.png"
                  alt="s-homepage-recipe-row-frame-1250"
                  border="0"
                />
              </span>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default Card;
