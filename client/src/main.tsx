import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App'; // Root layout with Navbar/Footer


import './styles/globals.css';     
import Test from './test/test2Purple';
import RestaurantUI from './test/test1Green';
import Home from './pages/home';
import About from './pages/About'
import Catering from './pages/Catering';
import FindUs from './pages/FIndUs';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App.tsx is the root layout (Navbar & Footer included)
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      { index: true, element: <Home /> },
      
      { path: 'restaurant', element: <RestaurantUI /> },
      { path: 'test', element: <Test /> },
      { path: 'about', element: <About /> },
      { path: 'catering', element: <Catering /> },
      { path: 'find-us', element: <FindUs /> },
      { path: 'menu', element: <Menu /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
