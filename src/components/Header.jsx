import React, { useEffect } from 'react'
import { auth } from "../utils/firebase";
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

 useEffect(() => {
   onAuthStateChanged(auth, (user) => {
     if (user) {
       // User is signed in, see docs for a list of available properties
       // https://firebase.google.com/docs/reference/js/auth.user

       dispatch(
         addUser({
           uid: user.uid,
           email: user.email,
           displayName: user.displayName,
         })
       );
       navigate("/browse");
     } else {
       dispatch(removeUser());
       navigate("/");
     }
   });
 }, []);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {        
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          {/* <img src="" alt="usericon"/> */}
          <label>{user.displayName}</label>
          <button className="font-bold text-white" onClick={handleSignout}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header