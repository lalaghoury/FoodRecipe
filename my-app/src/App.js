import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import { RecipeProvider } from "./context/RecipeContext";
import AllRecipesPage from "./Pages/AllRecipesPage/AllRecipesPage";
import Footer from "./components/Footer/Footer";
import CategoriesPage from "./Pages/CategoriesPage/CategoriesPage";

function App() {
  return (
    <div className="App-container">
      <RecipeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/recipe" element={<AllRecipesPage />} />
            <Route path="/category" element={<CategoriesPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </RecipeProvider>
    </div>
  );
}

export default App;
