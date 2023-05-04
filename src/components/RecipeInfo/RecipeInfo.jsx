import React, { useState } from 'react';
import {Rating} from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { HiHeart } from 'react-icons/hi';
const RecipeInfo = ({recipe}) => {
    const {cooking_method,recipe_name,ingredients,recipe_img,rating} = recipe;


    return (
        <div>
            
            <div className="card card-compact w-96 bg-base-100 shadow-xl content-center mb-7">
  <div className="card-body">
  
    <img src={recipe_img} alt="" />
    <p className='text-xl'>Recipe Name : <span className='text-sky-700'>{recipe_name}</span></p>
    <hr></hr>
    <p><span className='text-xl'>Ingredients :</span> {ingredients}</p>
    <p><span className='text-xl'>Cooking Method :</span> {cooking_method}</p>
    <div className='flex justify-between'>
    <div className='flex'>
      <Rating style={{maxWidth:100}} value={rating} readOnly/>
      <p><span className='text-xl'></span> {rating}</p>
    </div>
    <div id='favorite-button' className='text-2xl ' style={{color: 'blue'}}><HiHeart></HiHeart></div>
    </div>

    {/* <div className="toast">
  <div className="alert alert-info">
    <div>
      <span>New message arrived.</span>
    </div>
  </div>
</div> */}
    

    
  </div>
</div>
        </div>
    );
};

export default RecipeInfo;

