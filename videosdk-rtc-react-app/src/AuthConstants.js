import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// import React, { useContext, useEffect, useState } from 'react'
// import { auth } from '../firebase'
// const AuthContext = React.createContext()

// const useAuth = () => {
//     return (
//  useContext(AuthContext)
//       )
//   }


// const AuthProvide = () => {
//     Const[CurrentUser, setCurrentUser] =useState()

//     function signUp(email, password){
//        return auth.createUserWithEmailAndPassword(email,password)
//     }
 
//     auth.onAuthStateChanged(user =>{
//         setCurrentUser(user)
//     })
// const value = {
//     CurrentUser
// }


//   return (
// <AuthContext.Provider value={value}>
//     {Children}
// </AuthContext.Provider>
//     )
// }

// export default AuthProvide