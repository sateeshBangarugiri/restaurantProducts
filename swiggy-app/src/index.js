import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
import ProductList from './Components/ProductList/ProductList';
import ProductDetails from './Components/ProductDetails/ProductDetails';

const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <App />, // show component for particular path
    children: [
      // show children component for routing
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "restaurant/:resId",
        element: <ProductDetails />,
      },
    ],
  },
  // {
  //   path: "login",
  //   element: <Login />,
  // },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
