import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // Function to add a new recipe
  const createRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  // Function to delete a recipe
  const deleteRecipe = (indexToDelete) => {
    setRecipes(recipes.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
