import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1 className='text-center'>Welcome !!!! </h1>
            <h1 className='text-center'><span className=' text-4xl text-red-700'>{user.displayName}</span></h1>
        </div>
    );
};

export default Profile;