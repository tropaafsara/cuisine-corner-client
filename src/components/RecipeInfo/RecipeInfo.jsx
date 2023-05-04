import React from 'react';

const RecipeInfo = ({recipe}) => {
    const {cooking_method,recipe_name,ingredients,recipe_img,rating} = recipe;
    return (
        <div>
            
            <div className="card card-compact w-96 bg-base-100 shadow-xl content-center">
  <div className="card-body">
    {/* <p>Experience : {cooking_method}</p> */}
    <img src={recipe_img} alt="" />
    <p className='text-xl'>Recipe Name : <span className='text-sky-700'>{recipe_name}</span></p>
    <hr></hr>
    <p><span className='text-xl'>Ingredients :</span> {ingredients}</p>
    <p><span className='text-xl'>Cooking Method :</span> {cooking_method}</p>
    <p><span className='text-xl'>Rating :</span> {rating}</p>

    
  </div>
</div>
        </div>
    );
};

export default RecipeInfo;