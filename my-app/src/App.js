import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import { RecipeProvider } from "./context/RecipeContext";

function App() {
  return (
    <div className="App-container">
      <RecipeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </RecipeProvider>
    </div>
  );
}

export default App;
