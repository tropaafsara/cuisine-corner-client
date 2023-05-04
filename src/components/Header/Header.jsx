import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import "./Header.css"
import { Tooltip } from 'react-tooltip';


const Header = () => {


    const {user, logOut} = useContext(AuthContext);
    const handleLogout = () =>{
        logOut()
        .then(()=>{})
        .catch(error =>console.log(error));
    }

    return (
        <div className='mb-3 bg-white'>
            <div className="navbar flex justify-between">
                 <div>
                 <a className="normal-case text-3xl text-cyan-600">Cuisine Corner</a>
                 </div>
                 <div className=''>
                    

                 <NavLink activeClassName="active" className="btn btn-ghost normal-case text-lg"  to='/'>Home</NavLink>
                 <NavLink activeClassName="active" className="btn btn-ghost normal-case text-lg"  to='/blog'>Blog</NavLink>
                
                 {user && <NavLink activeClassName="active" className="btn btn-ghost normal-case text-lg" to='/profile'>Profile</NavLink>}
                 {
                    user ?<></>: <NavLink activeClassName="active" className="btn btn-ghost normal-case text-lg " to='/register'>Register</NavLink>

                 }
                
                 {  user ? 
                 <>

{/* <div className="tooltip" data-tip="hello">
<img className=' mx-5 relative w-10 h-10 overflow-hidden rounded-full' src={user.photoURL} alt="" />
</div> */}
                 
                    <div className='group relative m-1 flex justify-center'>
                    <img className=' mx-5 relative w-10 h-10 overflow-hidden rounded-full' src={user.photoURL} alt="" />
                    <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">{user.displayName}</span>
                    </div>

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







