import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({info}) => {

    const {_id,likes,num_recipes,years_of_experience,name,picture} = info;

    return (

        

 <div className="card card-compact w-96 bg-base-100 shadow-xl content-center">
  <figure><img src={picture}/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Experience : {years_of_experience}</p>
    <p>num_recipes: {num_recipes}</p>
    <p>Likes : {likes}</p>
    <div className="card-actions justify-end">
        <Link to={`/chefInfo/${_id}`}>
        <button className="btn btn-primary">View Recipe</button>
    </Link>
      
    </div>
  </div>
</div>
    );
};

export default NewsCard;