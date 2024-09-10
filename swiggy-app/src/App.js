import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
import NavigationBar from './Components/NavigationBar/NavigationBar';
function App() {
  return (
    <div className="App">

      <NavigationBar />
      <Outlet />

    </div>
  );
}



export default App;
