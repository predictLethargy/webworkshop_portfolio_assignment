import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Projects">Projects</NavLink>
    </nav>
  );
}

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
        },

        {
            path: "/Projects",
            element: <Projects />,
        },
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);