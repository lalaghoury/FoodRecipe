import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import { RecipeProvider } from "./context/RecipeContext";
import AllRecipesPage from "./Pages/AllRecipesPage/AllRecipesPage";
import Footer from "./components/Footer/Footer";
import CategoriesPage from "./Pages/CategoriesPage/CategoriesPage";
import AddRecipePage from "./Pages/AddRecipePage/AddRecipePage";
import { AddRecipeProvider } from "./context/AddRecipeContext";
import RecipeForm from "./components/AddRecipe/RecipeForm";

function App() {
  return (
    <div className="App-container">
      <AddRecipeProvider>
        <RecipeProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/recipe" element={<AllRecipesPage />} />
              <Route path="/category" element={<CategoriesPage />} />
              <Route path="/add-recipe" element={<AddRecipePage />} />
              <Route path="/test" element={<RecipeForm />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </RecipeProvider>
      </AddRecipeProvider>
    </div>
  );
}

export default App;
