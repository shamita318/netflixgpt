import React, { useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
    const[ isSignIn, setIsSignIn] = React.useState(true);
    const [errormessage, setErrorMessage] = React.useState(null);     
    const email = useRef(null);
    const password = useRef(null);
   
            
    const handleButtonClick = (e) => {
        e.preventDefault();
        console.log("Button clicked")
       
         const message = checkValidData(email.current.value, password.current.value);
        //  console.log(message);
         setErrorMessage(message); 
         if(message) return;
        //  sign in sign up logic
        if(!isSignIn){ 
             createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {

    const user = userCredential.user;
    console.log(user);
    
      
     })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " " + errorMessage);
    });
    


         } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " " + errorMessage);
  });
        }

    
        
        
    };
    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    };
  return (
    <div>
      <Header/>
      
      {/* FIX 1: Add 'absolute' to the image so it sits behind the form */}
      <div className="absolute">
        <img 
          className="h-screen w-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_medium.jpg"
          alt="background img"
        />
      </div>

      {/* FIX 2: Change 'relative' to 'absolute' and add 'bg-opacity' */}
      <form  onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          { !isSignIn && (
          <input 
            type="text" 
            placeholder='Username'
            className='w-full p-4 my-4 bg-gray-700 rounded' 
          />)}
          <input 
            ref={email}
            type="text" 
            placeholder='Email Address'
            className='w-full p-4 my-4 bg-gray-700 rounded' 
          />
          <input 
          ref={password}
            type="password" 
            placeholder='Password'
            className='w-full p-4 my-4 bg-gray-700 rounded' 
          />
          <p className='text-red-500 font-bold py-2 '>{ errormessage}</p>
          <button className='w-full p-4 my-6 bg-red-700 rounded-lg' onClick={handleButtonClick}> {isSignIn ? "Sign In" : "Sign Up"} 
          </button>
          
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign Up Now" : "Already have an account? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login
