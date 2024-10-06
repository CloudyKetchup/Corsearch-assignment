import { useState, useEffect } from 'react';
import { RecipeDetails } from '../../models/recipe/Recipe';

const API_URL = import.meta.env.VITE_API_URL;

const useRecipeDetails = (id?: string) => {
	const [recipeDetails, setRecipeDetails] = useState<RecipeDetails>();
	const [error, setError] = useState();

	useEffect(() => {
		if (!id) return;

		fetch(`${API_URL}/recipes/${id}`)
			.then(res => res.json())
			.then(setRecipeDetails)
			.catch(setError);
	}, [id]);

	return { recipeDetails, error };
};

export default useRecipeDetails;
