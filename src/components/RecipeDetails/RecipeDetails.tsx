import { FC } from 'react';
import { RecipeDetails as Details } from '../../models/recipe/Recipe';
import './styles.css';

export interface RecipeDetailsProps {
  details: Details;
};

interface FieldProps {
  label: string;
  value: string | number;
};

const Field: FC<FieldProps> = ({ label, value }) => (
  <div className="details-field">
    <div className="details-label">{label}</div>
    <div className="details-value">{value}</div>
  </div>
);

const RecipeDetails: FC<RecipeDetailsProps> = ({ details }) => (
  <div className="details-fields">
    <Field label="Name" value={details.name} />
    <Field label="Ingredients" value={details.ingredients.toString()} />
    <Field label="Time to cook" value={`${details.cookTimeMinutes} Minutes`} />
    <Field label="Calories" value={details.caloriesPerServing} />
    <Field label="Difficulty" value={details.difficulty} />
    <Field label="Instructions" value={details.instructions} />
  </div>
);

export default RecipeDetails;
