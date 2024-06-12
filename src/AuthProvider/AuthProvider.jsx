import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/Firebase";

import PropTypes from 'prop-types'
import axios from "axios";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const [error,setError] = useState('')

    const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }
  
    const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
  
    const googleLogin = () =>{
      setLoading(true)
      return signInWithPopup(auth,googleProvider)
       
      
   }
   
    const logOut = async () => {
      setLoading(true)
      
      return signOut(auth)
    }
  
    const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      })
    }
   

    // save user database
    const saveUser = async user =>{
      const currentUser = {
        email:user?.email,
        role:'member',
        
        status: 'verified'
      }
      const {data} = axios.put('https://exame-12-server.vercel.app/users',currentUser)
      return data
    }


  
    // onAuthStateChange
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        saveUser(currentUser)
        setLoading(false)
      })
      return () => {
        return unsubscribe()
      }
    }, [])
  
    const authInfo = {
      user,
      loading,
      setLoading,
      createUser,
      signIn,
      googleLogin,
      updateUserProfile,
      logOut,
      error,
      setError
     
    }
  
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
};

AuthProvider.propTypes = {
    // Array of children.
    children: PropTypes.array,
  }

export default AuthProvider;