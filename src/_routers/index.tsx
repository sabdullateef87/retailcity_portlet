import {
    createBrowserRouter,
} from "react-router-dom";

import App from "../App";
import {Login, Register} from "../pages/auth"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, 
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/hello/:id",
        element: <h1>Just because i know what you want !!!</h1>,
        loader: function({params}){
            console.log(params?.id);
            return params?.id;
        }
    },
]);


export default router;