import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: '/about',
                element: <AboutUs />
            }
        ]
    }
])
export default router;