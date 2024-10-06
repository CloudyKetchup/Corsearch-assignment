import { useEffect, useState } from 'react';
import { Recipe } from '../../models/recipe/Recipe';

const API_URL = import.meta.env.VITE_API_URL;

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`${API_URL}/recipes?select=name`)
      .then(res => res.json())
      .then(({ recipes }) => setRecipes(recipes))
      .catch(setError);
  }, []);

  return { recipes, error };
};

export default useRecipes;
