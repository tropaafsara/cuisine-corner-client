import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { Navigate } from "react-router-dom";

const Login = () => {
  const {user} = useContext(AuthContext);

    const {signIn, signInWithGoogle, signInWithGithub} = useContext(AuthContext);

    const handleLogin = event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error=>{
            console.log(error);
        })
    }


    const handleGoogleSignIn =() =>{
        signInWithGoogle()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const handleGithubSignIn =() =>{
        signInWithGithub()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
      
        
      
        <div className="hero min-h-screen bg-white-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white-100">
      <form onSubmit={handleLogin} className="card-body">
      
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
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className='ml-8 mb-4'>
      <Link to='/register'>
      <button className="link link-secondary">Don't have an Account? Register Now</button>
      </Link>
      <div className='m-7 flex flex-wrap '>
      <button onClick={handleGoogleSignIn} className="btn btn-accent">Sign In with GOOGLE</button>

      <button onClick={handleGithubSignIn} className="btn btn-accent">Sign In with GITHUB</button>
      </div>
      {user && (
          <Navigate to="/profile" replace={true} />
        )}
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;