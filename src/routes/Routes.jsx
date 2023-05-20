import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Blog from "../pages/blogs/Blog";
import Login from "../layouts/login/Login";
import ErrorPage from "../components/ErrorPage";
import Register from "../layouts/register/Register";
import ViewDetails from "../pages/about-products/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/toys/AllToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/alltoys",
        element:<AllToys/>
      }
    ],
  },
]);


export default router;
