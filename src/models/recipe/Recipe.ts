export interface Recipe {
	id: string;
	name: string;
}

export interface RecipeDetails {
	id: string;
	name: string;
	ingredients: string[];
	prepTimeMinutes: number;
	cookTimeMinutes: number;
	difficulty: string;
	cuisine: string;
	caloriesPerServing: number;
};
