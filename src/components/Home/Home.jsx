import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Link, useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import ChefInfo from '../ChefInfo/ChefInfo';
import RecipeInfo from '../RecipeInfo/RecipeInfo';

const Home = () => {
    const {user} = useContext(AuthContext);

    

    const chefInfos = useLoaderData();

    return (
        <div className=''>
            {/* {user && <span>{user.email}</span>} */}
            
            <div className='flex gap-8 mb-8 text-2xl justify-center items-center'>
                
            
                <img className='w-2/3 ' src="https://i.ibb.co/vkHdHkV/banner1.jpg" alt="" />
                

                <p className='italic text-sky-700'>Welcome to Cuisine Corner, where you'll find a treasure trove of culinary delights to tantalize your taste buds and inspire your inner chef. Whether you're a seasoned cook or a beginner in the kitchen, we've got something for everyone.</p>
            </div>
            <div className='mb-8 text-4xl text-center'>Popular Recipes</div>
            <section className='p-8 mx-8 '>
                <div className='grid lg:grid-cols-3 md:grid-cols-1 w-full gap-10 relative  overflow-hidden bg-cover bg-no-repeat'>
                <img  className='transition duration-300 ease-in-out hover:scale-110' src="https://i.ibb.co/HdWyBt6/recipe3.jpg" alt=""  />
                <img className='transition duration-300 ease-in-out hover:scale-110' src="https://i.ibb.co/HdWyBt6/recipe3.jpg" alt=""  />
                <img className='transition duration-300 ease-in-out hover:scale-110' src="https://i.ibb.co/HdWyBt6/recipe3.jpg" alt=""  />
                
                
                </div>
                
                </section>
            
            <h1 className='mb-8 text-4xl text-center'>Our Chefs</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 ms-10'>
            {
                chefInfos.map(info => <NewsCard
                key={info._id}  
                info={info}
                >

                </NewsCard>)
            }
            
            </div>
            
            <section className='border-x-4 p-8 m-10'>
                <h2 className='text-center text-2xl italic'>Its all about Good</h2>
                <h1 className='text-center text-4xl italic'>Good Food & Taste for You</h1>
                <div className='flex justify-evenly mt-10 ms-10 '>
                    <img className='border p-8' src="https://i.ibb.co/dBxMNf8/food-icon1.png" alt="" />
                    <img className='border p-8' src="https://i.ibb.co/dBxMNf8/food-icon1.png" alt="" />
                    <img className='border p-8' src="https://i.ibb.co/dBxMNf8/food-icon1.png" alt="" />
                </div>
                <div className='flex mt-8 gap-9 justify-center'>
                <button className="btn btn-outline btn-success">Watch Our Video</button>
                <button className="btn btn-outline btn-success">Subscribe to our</button>
                </div>
            </section>

            
            


        </div>
    );
};

export default Home;