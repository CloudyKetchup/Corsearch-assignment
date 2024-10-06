import { useState } from 'react'
import { useRecipes } from './hooks/useRecipes';
import { useRecipeDetails } from './hooks/useRecipeDetails';
import { Recipe } from './models/recipe/Recipe';
import Dropdown from './components/Dropdown/Dropdown';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import './App.css'

function App() {
  const [recipe, setRecipe] = useState<Recipe>();
  const { recipes } = useRecipes();
  const { recipeDetails } = useRecipeDetails(recipe?.id);

  return (
    <div className="main-container">
      <div className="dropdown-container">
        <Dropdown
          placeholder="Select a recipe" 
          onSelect={setRecipe}
          items={recipes}
        />
      </div>
      <div className="divider" />
      <div className="recipe-details-container">
        {recipeDetails ? (
          <RecipeDetails details={recipeDetails} />
        ) : (
          <div className="recipe-details-fallback">
            Select a recipe from the menu please
          </div>
        )}
      </div>
    </div>
  );
};

export default App
