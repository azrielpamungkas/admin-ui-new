import "./App.css";

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn";
import ErrorPage from "./pages/error";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import SignUpPage from "./pages/signUp";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: < SignUpPage />,
    },
    {
      path: "/balance",
      element: <BalancePage />,
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;