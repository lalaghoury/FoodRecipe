import { Form } from "antd";
import { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const AddRecipeContext = createContext();

export const AddRecipeProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [form] = Form.useForm();

  function loadFromLocalStorage(key) {
    try {
      const item = localStorage.getItem(key);
      if (!item) {
        return [];
        throw new Error("Item not found in local storage");
      }
      return JSON.parse(item);
    } catch (error) {
      console.error("Error retrieving item from local storage:", error);
    }
  }

  function saveToLocalStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving item to local storage:", error);
    }
  }

  function getAllRecepies() {
    return loadFromLocalStorage("recepies");
  }

  function addRecepie(recepie) {
    let recepies = getAllRecepies();
    // recepies.push(recepie);
    recepies = [...recepies, recepie];
    saveToLocalStorage("recepies", recepies);
  }

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onFinish = (e) => {
    const allRecipies = getAllRecepies();
    const newRecipe = { ...e, id: nanoid(), image: imageUrl }; // Create a single recipe object
    const updatedRecipes = [...allRecipies, newRecipe];
    console.log(e);
    console.log(updatedRecipes);
    addRecepie(newRecipe); // Pass the single recipe object to addRecepie
    console.log(updatedRecipes);
    saveToLocalStorage("recepies", updatedRecipes);
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
    console.log(reader.readAsDataURL(img));
  };

  const beforeUpload = (e) => {
    const isImage = e.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    }
    return isImage;
  };

  const handleChange = (e) => {
    if (e.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (e.file.status === "done") {
      getBase64(e.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
        console.log("aasil");
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : null}
      <div>
        <PlusOutlined /> Upload
      </div>
    </div>
  );

  return (
    <AddRecipeContext.Provider
      value={{
        saveToLocalStorage,
        loadFromLocalStorage,
        getAllRecepies,
        addRecepie,
        normFile,
        onFinish,
        getBase64,
        beforeUpload,
        handleChange,
        uploadButton,
        form,
        imageUrl,
        setImageUrl,
        loading,
        setLoading,
      }}
    >
      {children}
    </AddRecipeContext.Provider>
  );
};

export const useAddRecipe = () => {
  const context = useContext(AddRecipeContext);
  if (!context) {
    throw new Error("useAddRecipe must be used within a AddRecipeProvider");
  }
  return context;
};
