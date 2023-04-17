import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useState, useEffect } from "react";
// import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { doSiteLogin } from "./store/features/global/globalSlice";
import { connect } from "react-redux";
import {getLocal} from './utils/utils'

import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import Login from "./view/Login/Login";

function App() {
  // const [isAuth, setAuth] = useState(false);

  const isAuth = useSelector((state) => state.globalData.isAuth) || getLocal('isAuth');


  const dispatch = useDispatch();

  let onLogin = (e, data) => {
    dispatch(doSiteLogin(data));
  };

  let protectedRoute = [
    {
      path: "/",
      element: <div>User List</div>,
    },
    {
      path: "/updateUser",
      element: <div>Update User</div>,
    },
  ];

  let genralRoutes = [
    {
      path: "/",
      element: <Login isAuth={isAuth} onLogin={onLogin} />,
    },
    {
      path: "/signup",
      element: <div>Sign Up!!</div>,
    },
  ];

  let finalRoute = isAuth ? protectedRoute : genralRoutes;

  const router = createBrowserRouter(finalRoute);

  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
