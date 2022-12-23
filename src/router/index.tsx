import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import  SecondPage from "../pages/SecondPage/SecondPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/SecondPage",
        element: <SecondPage />,
    },
]);

export default router;