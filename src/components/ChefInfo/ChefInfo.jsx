import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import RecipeInfo from '../RecipeInfo/RecipeInfo';

const ChefInfo = () => {
    const {id} = useParams();
    const chefInfo = useLoaderData();
    return (
        <div>
            <h1 className='text-center text-4xl mb-5'>Chef Info</h1>
            <div className='flex gap-8 justify-center items-center border mx-8'>
            
            <div>
            <img className='w-full' src={chefInfo.picture}/>
            </div>
            <div className=''>
            <h1 className='text-xl mb-3'><span >Chef Name</span> : {chefInfo.name}</h1>
            <h1 className='mb-3'><span className='text-xl'>Chef Bio : </span>{chefInfo.bio}</h1>
            <h1 className='text-xl mb-3 '> Years of Experience : {chefInfo.years_of_experience}yrs</h1>
            <h1 className='text-xl mb-3 '>No. of Recipes : {chefInfo.recipeInfo.length}</h1>
            <h1 className='text-xl mb-3 '>Likes : {chefInfo.likes}</h1>
            </div>
            </div>

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