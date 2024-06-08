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

import DashboardLayout from "../Layout/DashboardLayout";
import AddNewClass from "../Components/DashBoard/Admin/AddNewClass";
import AddBlog from "../Components/DashBoard/AddBlog/AddBlog";
import ForumDetails from "../Components/Pages/Forum/ForumDetails";
import Error from "../Components/Error/Error";
import Profile from "../Components/DashBoard/Profile/Profile";
import BecomeATrainer from "../Components/Pages/AllTrainer/BecomeATrainer";
import AppliedTrainer from "../Components/DashBoard/Trainer/AppliedTrainer";
import RequestATrainer from "../Components/DashBoard/RequestATrainer/RequestATrainer";
import Manageuser from "../Components/DashBoard/ManageUser/Manageuser";
import AllTrainerDetails from "../Components/Pages/AllTrainer/AllTrainerDetails";
import NewsLetterEmail from "../Components/Pages/NewsLetter/NewsLetterEmail";
import AllTrainerDashboard from "../Components/DashBoard/Trainer/AllTrainerDashboard";
import PrivateRoute from './../AuthProvider/PrivateRoute';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <Error></Error>,
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
        },
        {
          path:'/blog-details/:id',
          element: <ForumDetails></ForumDetails>,
          loader: ({params}) => fetch( `http://localhost:5000/blog/${params.id}`)
          
        },
        {
          path: '/become-A-Trainer',
          element: <PrivateRoute><BecomeATrainer></BecomeATrainer></PrivateRoute>
        },
        {
          path:'/trainer-Details/:id',
          element: <AllTrainerDetails></AllTrainerDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/applied/${params.id}`)
        }
      ]
    },

    // dashboard route
    {
      
      path: '/dashBoard',
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
     
      children:[
       {
        path:'addNewClass',
        element: <PrivateRoute> <AddNewClass></AddNewClass></PrivateRoute>,
       },
       {
        path: 'addBlog',
        element:  <PrivateRoute><AddBlog></AddBlog></PrivateRoute>

       },
       {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path: 'applied-Trainer',
        element:  <PrivateRoute><AppliedTrainer></AppliedTrainer></PrivateRoute>
       
     
      },
      {
        path: 'request-Trainer',
        element: <RequestATrainer></RequestATrainer>
      },
      {
        path: 'manage-user-role',
        element: <PrivateRoute><Manageuser></Manageuser></PrivateRoute>
      },
      {
        path: 'news-letter',
         element : <PrivateRoute><NewsLetterEmail></NewsLetterEmail></PrivateRoute>
      },
      {
        path: 'all-Trainer',
        element: <PrivateRoute><AllTrainerDashboard></AllTrainerDashboard></PrivateRoute>
      }
      ]
    },
 
  ]);

  export default router;