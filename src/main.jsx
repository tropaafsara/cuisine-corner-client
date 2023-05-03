import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProviders from './providers/AuthProviders';
import Orders from './components/Oders/Orders';
import PrivateRoute from './components/routes/PrivateRoute';
import Profile from './components/Profile/Profile';
import ChefInfo from './components/ChefInfo/ChefInfo';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:8000/chefInfo`)
      },
      
      {
        path: '/chefInfo/:id',
        element: <ChefInfo></ChefInfo>,
        loader: ({params}) => fetch(`http://localhost:8000/chefInfo/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element:<Register>  </Register>
      },
      {
        path: '/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
