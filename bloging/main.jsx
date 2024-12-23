import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Clients from "./Pages/Clients";
import NotFound from "./Pages/Notfound"; // Ensure NotFound component exists.
import './index.css';
import 'remixicon/fonts/remixicon.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "service", element: <Service /> },
      { path: "Clients", element: <Clients /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
