
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';  
import { LOGO, UserLOgo } from '../utils/constants';

const Header = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignOut = () => {

        signOut(auth).then(() => {
            navigate("/");
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

    }
     useEffect(() => {
             const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
    
             const {uid, email, displayName} = user;
             dispatch(addUser({uid: uid, email: email, displayName: displayName})
            );
            navigate("/browse");
             
             } else {
                dispatch(removeUser())
                navigate("/");
               
   
    
          }
             });
            //  unsubscribe when coponent unmounts
             return () => unsubscribe();
        }, [])
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      
      {/* 1. Netflix Logo (Left Side) */}
      <img
        className="w-44"
        src= {LOGO}
        alt="Netflix Logo"
      />

      {/* 2. User Profile & Sign Out (Right Side Group) */}
      {user && (
        <div className="flex p-2">
        <img
          className="w-12 h-12" // Fixed the 'flexh-10' typo
          alt="usericon"
          src={UserLOgo}
        />
        <button  onClick={handleSignOut} className="font-bold  text-white cursor-pointer ml-2">
          Sign Out
        </button>
      </div>)}

    </div>
  )
}

export default Header