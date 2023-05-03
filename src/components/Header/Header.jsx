import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import "./Header.css"

const Header = () => {


    const {user, logOut} = useContext(AuthContext);
    const handleLogout = () =>{
        logOut()
        .then(()=>{})
        .catch(error =>console.log(error));
    }

    return (
        <div className='mb-3'>
            <div className="navbar flex justify-between">
                 <div>
                 <a className="normal-case text-3xl text-cyan-600">Cuisine Corner</a>
                 </div>
                 <div className=''>
                    

                 <NavLink activeClassName="active" className="btn btn-ghost normal-case text-lg"  to='/'>Home</NavLink>
                 <NavLink activeClassName="active" className="btn btn-ghost normal-case text-lg" to='/orders'>Orders</NavLink>
                 {user && <NavLink activeClassName="active" className="btn btn-ghost normal-case text-lg" to='/profile'>Profile</NavLink>}
                 <NavLink activeClassName="active" className="btn btn-ghost normal-case text-lg " to='/register'>Register</NavLink>
                 
                 
                 {  user ? 
                 <>
                    <span>{user.email}</span>
                    <button onClick={handleLogout} className="btn btn-active btn-primary">Sign Out</button>
                 </>
                  :<><NavLink activeClassName="active" className="btn btn-ghost normal-case text-lg" to='/login'>Login</NavLink></> }
                 </div>
            </div>
            <hr></hr>
        </div>
    );
};

export default Header;







