import React from 'react';

const RecipeInfo = ({recipe}) => {
    const {cooking_method,recipe_name,ingredients,recipe_img} = recipe;
    return (
        <div>
            <h1>Recipe Info</h1>
            <div className="card card-compact w-96 bg-base-100 shadow-xl content-center">
  <div className="card-body">
    {/* <p>Experience : {cooking_method}</p> */}
    <img src={recipe_img} alt="" />
    <p>Recipe Name : {recipe_name}</p>
    <p>Ingredients : {ingredients}</p>

    
  </div>
</div>
        </div>
    );
};

export default RecipeInfo;