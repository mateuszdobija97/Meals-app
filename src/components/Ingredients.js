import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Ingredients = ({ ingredientLines }) => {

    const items = ingredientLines.map(ingredient => (
        <li key={uuidv4()}>{ingredient}</li>
    ))

    return (
        <ul className="ingredient-list">
            {items}
        </ul>
    );
}

export default Ingredients;