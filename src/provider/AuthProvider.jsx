/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import auth from '../firebase/firebase.config'
import axios from 'axios'
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
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

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const LoggedEmail = currentUser?.email || user?.email;
      const loggedUser = { email: LoggedEmail }
      setUser(currentUser)
      setLoading(false)
      // get token when currentUser have 
      if (currentUser) {
        axios.post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, { withCredentials: true })
          .then()
      }
      else {
        axios.post(`${import.meta.env.VITE_API_URL}/logout`, loggedUser, { withCredentials: true })
          .then()
      }
      return () => {
        unsubscribe();
      }
    })
  }, [user])

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    logIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
