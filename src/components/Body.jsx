import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

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
          // navigate("/browse");
        } else {
          dispatch(removeUser());
          // navigate("/");
        }
      });
    },
    []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
