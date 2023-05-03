import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';

const NewsCard = ({info}) => {

    const {_id,likes,num_recipes,years_of_experience,name,picture,recipeInfo} = info;

    return (
        
            
            <div className=" mx-10  gap-4 w-96 bg-base-100 shadow-xl content-center mb-8  ">

                <figure><img className='w-full' src={picture}/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Experience : {years_of_experience}</p>
                    <p>num_recipes: {recipeInfo.length}</p>
                    <p>Likes : {likes}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/chefInfo/${_id}`}>
                             <button className="btn btn-accent">View Recipe</button>
                            </Link>
    
                        </div>
                </div>
            </div>
        

        
//card card-compact
 
    );
};

export default NewsCard;