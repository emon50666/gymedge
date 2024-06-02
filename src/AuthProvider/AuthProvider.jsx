import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/Firebase";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import PropTypes from 'prop-types'

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
  
    const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }
  
    const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
  
    const signInWithGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, GoogleAuthProvider)
    }
  
   
    const logOut = async () => {
      setLoading(true)
      
      return signOut(auth)
    }
  
    // const updateUserProfile = (name, photo) => {
    //   return updateProfile(auth.currentUser, {
    //     displayName: name,
    //     photoURL: photo,
    //   })
    // }
   
  
    // onAuthStateChange
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
      
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
      signInWithGoogle,
     
      logOut,
     
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