import "./App.css";

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import error from "./pages/error";
import ErrorPage from "./pages/error";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <div className="flex justify-center items-center min-h-screen">
        <Link to="/login" className="p-2 m-5 bg-primary text-white">
          Login
        </Link>
        |
        <Link to="/register" className="p-2 m-5 bg-primary text-white">
          Register
        </Link>
      </div>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;