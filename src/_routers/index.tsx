import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { LandingPage } from "../pages";
import { ForgotPassword, Login, Register } from "../pages/auth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
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
        path: "/forgot_password",
        element: <ForgotPassword />,
    }
]);

export default router;

