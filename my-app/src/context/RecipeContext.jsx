import React, { createContext, useContext, useState } from "react";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Onion Rings",
      username: "Alex Martin",
      image:
        "https://i.ibb.co/Fs5k7RD/s-homepage-recipe-row-36700-erin-me-1384569-a-93-f-4-fde-a-6-ce-3-e-21-b-69-b-04-fa-1.png",
      userimage: "https://i.ibb.co/yhrMpQz/s-homepage-recipe-row-user-icon.png",
      blogimage:
        "https://i.ibb.co/0rWTFWF/s-homepage-person-s-hand-holding-alarm-clock-hand-breakfast-table-min-1.png",
      blogheading: "Unlocking the Benefits of Intermittent Fasting for ",
      blogslogan:
        "Weight Management and Health Weight Management and Health Weight   ...",
      categoryimage: "https://i.ibb.co/kyrjVm3/s-homepage-ellipse-26.png",
      categoryname: "Breakfast recipes",
    },
    {
      id: 2,
      name: "Italian Pastry",
      username: "Aasil Ghoury",
      image: "https://i.ibb.co/HCgKfxk/f.png",
      userimage: "https://i.ibb.co/yhrMpQz/s-homepage-recipe-row-user-icon.png",
      blogimage:
        "https://i.ibb.co/68b21J7/s-homepage-wepik-export-20230925201745-jeb-61.png",
      blogheading: "Unlocking the Benefits of Intermittent Fasting for ",
      blogslogan: " Unveiling the Hidden Dangers ....",
      categoryimage: "https://i.ibb.co/ThVCNby/s-homepage-ellipse-27.png",
      categoryname: "Lunch recipes",
    },
    {
      id: 3,
      name: "Chicken Rolls",
      username: "Zaki Ghoury",
      image: "https://i.ibb.co/r4kLgx3/c.png",
      userimage: "https://i.ibb.co/yhrMpQz/s-homepage-recipe-row-user-icon.png",
      blogimage: "",
      blogheading: "",
      blogslogan: "",
      categoryimage: "https://i.ibb.co/44M81Jt/s-homepage-ellipse-28.png",
      categoryname: "Dinner recipes",
    },
    {
      id: 4,
      name: "Omlet + Sandwitch",
      username: "Ali Usman",
      image: "https://i.ibb.co/0KBZMGF/a.png",
      userimage: "https://i.ibb.co/yhrMpQz/s-homepage-recipe-row-user-icon.png",
      blogimage: "",
      blogheading: "",
      blogslogan: "",
      categoryimage: "https://i.ibb.co/S5hNd65/s-homepage-ellipse-29.png",
      categoryname: "Appetizer recipes",
    },
    {
      id: 5,
      name: "Vegg Rolls",
      username: "Ms. Amalia Shields",
      image: "https://i.ibb.co/Vw4dGyT/d.png",
      userimage: "https://i.ibb.co/yhrMpQz/s-homepage-recipe-row-user-icon.png",
      blogimage: "",
      blogheading: "",
      blogslogan: "",
      categoryimage: "https://i.ibb.co/mtPPMy4/s-homepage-ellipse-30.png",
      categoryname: "Salad recipes",
    },
    {
      id: 6,
      name: "Indian Style",
      username: "M.Beahan",
      image: "https://i.ibb.co/FHC3cJj/aa.png",
      userimage: "https://i.ibb.co/yhrMpQz/s-homepage-recipe-row-user-icon.png",
      blogimage: "",
      blogheading: "",
      blogslogan: "",
      categoryimage: "https://i.ibb.co/r5Lv90t/s-homepage-ellipse-32.png",
      categoryname: "Pizza recipes",
    },
    {
      id: 7,
      // name: "Indian Style",
      // username: "M.Beahan",
      // image: "https://i.ibb.co/FHC3cJj/aa.png",
      // userimage: "https://i.ibb.co/yhrMpQz/s-homepage-recipe-row-user-icon.png",
      // blogimage: "",
      // blogheading: "",
      // blogslogan: "",
      categoryimage: "https://i.ibb.co/0mtrZJ5/s-homepage-ellipse-31.png",
      categoryname: "Smooothie recipes",
    },
    {
      id: 8,
      // name: "Indian Style",
      // username: "M.Beahan",
      // image: "https://i.ibb.co/FHC3cJj/aa.png",
      // userimage: "https://i.ibb.co/yhrMpQz/s-homepage-recipe-row-user-icon.png",
      // blogimage: "",
      // blogheading: "",
      // blogslogan: "",
      categoryimage: "https://i.ibb.co/m5YDmdL/s-homepage-ellipse-33.png",
      categoryname: "Pasta recipes",
    },
    {
      id: 9,
      // name: "Indian Style",
      // username: "M.Beahan",
      // image: "https://i.ibb.co/FHC3cJj/aa.png",
      // userimage: "https://i.ibb.co/yhrMpQz/s-homepage-recipe-row-user-icon.png",
      // blogimage: "",
      // blogheading: "",
      // blogslogan: "",
      categoryimage: "",
      categoryname: "Pasta recipes",
    },
  ]);

  return (
    <RecipeContext.Provider value={{ data, setData }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
