// import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Layout from "./components/Layout/Layout";
import '@fortawesome/fontawesome-free/css/all.min.css'
import NotFound from "./components/NotFound/NotFound";
import Products from "./components/Products/Products";


let routers = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "products", element: <Products /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);


function App() {
  return <RouterProvider router={routers}> </RouterProvider>
}

export default App;
