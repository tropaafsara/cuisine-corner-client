import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Link, useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import ChefInfo from '../ChefInfo/ChefInfo';

const Home = () => {
    const {user} = useContext(AuthContext);
    // console.log(user);

    // const [chefInfos, setchefInfo] = useState();
    // useEffect(()=>{
    //     fetch('http://localhost:8000/chefInfo')
    //     .then(res =>res.json())
    //     .then(data => setchefInfo(data))
    //     .catch(error => console.log(error))
    // })

    const chefInfos = useLoaderData();

    return (
        <div className=''>
            {/* {user && <span>{user.email}</span>} */}
            
            <div className='flex gap-8 mb-8 text-2xl justify-center items-center'>
                
            
                <img className='w-2/3 ' src="https://i.ibb.co/vkHdHkV/banner1.jpg" alt="" />
                

                <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat delectus tempore voluptas dignissimos reprehenderit, similique error libero velit dicta quae et minima obcaecati. Officia incidunt ratione nobis ullam aliquam dolores?</p>
            </div>
            <h1 className='mb-8 text-4xl text-center'>Our Chefs</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 '>
            {
                chefInfos.map(info => <NewsCard
                key={info._id}  
                info={info}
                >

                </NewsCard>)
            }
            </div>

            
        
           
            



        </div>
    );
};

export default Home;