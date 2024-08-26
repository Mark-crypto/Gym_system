import { createBrowserRouter } from "react-router-dom";

import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Feedback } from "./pages/Feedback";
import { Profile } from "./pages/Profile";
import { Registration } from "./pages/Registration";
import { Reports } from "./pages/Reports";
import { ErrorBoundary } from "./pages/ErrorBoundary";
// import { Loading } from "./components/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/registration",
    element: <Registration />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/reports",
    element: <Reports />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "*",
    element: <ErrorBoundary />,
  },
]);

export function App() {
  return (
    <>
      <Dashboard />
      {/* <Loading /> */}
    </>
  );
}
