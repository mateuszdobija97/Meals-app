import React, { useState } from 'react';
import Ingredients from './Ingredients'
import Nutrients from './Nutrients'

const Recipe = ({ recipe }) => {

    const [showNutrients, setShowNutrients] = useState(false);
    const [showIngredients, setShowIngredients] = useState(false);
    const { label, image, url, ingredientLines, totalNutrients, calories } = recipe.recipe;

    return (
        <section className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <a href={url} target="_blank" rel="noopener noreferrer">More</a>
            <button
                onClick={() => { setShowIngredients(!showIngredients); setShowNutrients(false) }}
                style={showIngredients === true ? { backgroundColor: 'rgba(68, 68, 68, 0.9)' } : {}}
            >Ingredients
            </button>
            <button
                onClick={() => { setShowNutrients(!showNutrients); setShowIngredients(false) }}
                style={showNutrients === true ? { backgroundColor: 'rgba(68, 68, 68, 0.9)' } : {}}
            >Nutrients
            </button>
            {showIngredients && <Ingredients ingredientLines={ingredientLines} />}
            {showNutrients && <Nutrients totalNutrients={totalNutrients} calories={calories} />}
        </section>
    );
}

export default Recipe;