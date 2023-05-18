import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Blog from "../pages/blogs/Blog";
import Login from "../layouts/login/Login";
import ErrorPage from "../components/ErrorPage";
import Register from "../layouts/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/blogs",
        element:<Blog/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element:<Register/>
      }
    ],
  },
]);


export default router;
