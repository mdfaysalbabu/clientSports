import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../../Firebase";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const Authprovider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   logOut
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  //   GoogleLogin
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //   useeEffect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // get token and set localStorage token
      if(currentUser){
        axios.post('http://localhost:4000/jwt',{email:currentUser.email})
        .then(data=>{
          console.log(data.data.token)
          localStorage.setItem('total-token',data.data.token)
          setLoading(false);
        })
      }
      else{
        localStorage.removeItem('total-token')
      }
      
    });
    return () => {
      unsubscribe();
    };
  }, []);
  //   updateUser
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logout,
    googleLogin,
    updateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
