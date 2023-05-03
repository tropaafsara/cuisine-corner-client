import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import RecipeInfo from '../RecipeInfo/RecipeInfo';

const ChefInfo = () => {
    const {id} = useParams();
    const chefInfo = useLoaderData();
    return (
        <div>
            <h1>Chef Info : {chefInfo.name}</h1>
            <h1>Chef Bio : {chefInfo.bio}</h1>
            <h1>Likes : {chefInfo.likes}</h1>

            <h1 className='text-2xl text-center m-5'>Recipe Info </h1>
            
            <div className='grid lg:grid-cols-3 md:grid-cols-2'>
            {
                chefInfo.recipeInfo.map(recipe => <RecipeInfo
                key={recipe._id}
                recipe={recipe}
                ></RecipeInfo>)
            }
                
            </div>
            
            
            
        </div>
    );
};

export default ChefInfo;