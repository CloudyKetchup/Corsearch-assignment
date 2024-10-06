import { FC } from 'react';
import { Recipe } from '../../models/recipe/Recipe';
import './styles.css';

export interface DropdownProps {
  placeholder: string;
  onSelect: (recipe: Recipe) => void
  items: Recipe[];
};

const Dropdown: FC<DropdownProps> = ({ placeholder, onSelect, items }) => (
  <div className="dropdown">
    <button className="dropbtn">{placeholder}</button>
    <div className="dropdown-content">
      {items.map(recipe => (
        <a key={recipe.id} href="#" onClick={() => onSelect(recipe)}>{recipe.name}</a>
      ))}
    </div>
  </div>
);

export default Dropdown;
