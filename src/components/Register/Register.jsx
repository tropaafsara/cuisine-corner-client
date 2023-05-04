import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import './Register.css'

const Register = () => {
    const {user, createUser,userProfile} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [image, setImage] = useState('');


      const handleRegister = event=>{
          event.preventDefault();
          const form = event.target;
          const name = form.name.value;
          const email = form.email.value;
          const password = form.password.value;
          const photo = form.photo.value;
        
          
          console.log(email,password, name);
          if(password.length<6){
              setError('password must be 6 characters or longer')
              return;
          }

          createUser(email,password)
          .then(result=>{
              const loggedUser = result.user;
              console.log(loggedUser);
              form.reset();
              userProfile(result.user,name,photo)
          })
          .catch(error=>{
              console.log(error);
          })

          //update Profile 
          userProfile(name,photo)
          .then(()=>{
            console.log("profile updagtes");
          })
          .catch((error)=>{
            console.log("error",error);
          })

          

      }
    return (
        <div className="hero min-h-screen bg-white-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white-100">
      <form onSubmit={handleRegister}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="name" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" required className="input input-bordered" />
          <label className="label">
            <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Choose Profile Picture</span>
          </label>
          <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className='text-error ml-8 mb-5'>{error}</p>
      {user && (
          <Navigate to="/profile" replace={true} />
        )}
    </div>
  </div>
</div>
    );
};

export default Register;

