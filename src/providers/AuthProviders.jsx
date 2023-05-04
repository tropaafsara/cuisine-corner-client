import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, updateProfile,onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
        
    }
    const signIn =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleAuthProvider);
    }
    const signInWithGithub = () =>{
        return signInWithPopup(auth, githubAuthProvider);
    }
    //update profile
   
    const userProfile = (user,name,photo)=>{
        updateProfile(user,{
            displayName: name,
            photoURL: photo
        })
    }
    const logOut =() =>{
        return signOut(auth);
    }
    
    //observe auth state change
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        
        return ()=>{
                unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        userProfile,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;