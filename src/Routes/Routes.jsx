import {
    createBrowserRouter,

  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register/Register";
import AllTrainer from "../Components/Pages/AllTrainer/AllTrainer";
import AllClass from "../Components/Pages/AllClasses/AllClass";
import Forum from "../Components/Pages/Forum/Forum";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/allTrainer',
          element: <AllTrainer></AllTrainer>
        },
        {
          path: '/allClass',
          element: <AllClass></AllClass>
        },
        {
          path: '/forum',
          element: <Forum></Forum>
        }
      ]
    },
  ]);

  export default router;