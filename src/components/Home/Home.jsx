import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Link } from 'react-router-dom';

const Home = () => {
    const {user} = useContext(AuthContext);
    // console.log(user);

    const [chefInfos, setchefInfo] = useState();
    useEffect(()=>{
        fetch('http://localhost:8000/chefInfo')
        .then(res =>res.json())
        .then(data => setchefInfo(data))
        .catch(error => console.log(error))
    })

    return (
        <div>
            
            <h1>This is home {user && <span>{user.email}</span>}</h1>

            
           
            {/* {
                chefInfos.map(chefInfo => <p
                    key={chefInfo._id}
                >

                    <Link to={`/chef/${chefInfo._id}`}>{chefInfo.name}</Link>

                </p>)
            } */}
            



        </div>
    );
};

export default Home;