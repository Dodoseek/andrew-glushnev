import { createBrowserRouter } from "react-router-dom";
import Landing from "@landing/Landing";
import ErrorPage from "@specific/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
