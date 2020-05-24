import React from 'react';

const Ingredients = ({ totalNutrients }) => {

    const items = (
        <React.Fragment>
            <li>{`${totalNutrients.ENERC_KCAL.label} : ${(totalNutrients.ENERC_KCAL.quantity).toFixed(1)} ${totalNutrients.ENERC_KCAL.unit}`}</li>
            <li>{`${totalNutrients.PROCNT.label} : ${(totalNutrients.PROCNT.quantity).toFixed(1)} ${totalNutrients.PROCNT.unit}`}</li>
            <li>{`${totalNutrients.CHOCDF.label} : ${(totalNutrients.CHOCDF.quantity).toFixed(1)} ${totalNutrients.CHOCDF.unit}`}</li>
            <li>{`${totalNutrients.FAT.label} : ${(totalNutrients.FAT.quantity).toFixed(1)} ${totalNutrients.FAT.unit}`}</li>
        </React.Fragment>
    )

    return (
        <ul className="nutrient-list">
            {items}
        </ul>
    );
}

export default Ingredients;