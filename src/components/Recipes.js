import React from 'react';
import Recipe from './Recipe'
import { v4 as uuidv4 } from 'uuid';

const Recipes = ({ recipes }) => {

    const items = recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)


    return (
        <main className="recipes">
            {items}
        </main>
    );
}

export default Recipes;