import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import Rooms from "../pages/Rooms";
import RoomDetails from "../pages/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import MyBookings from "../pages/MyBookings";
import UpdateDate from "../pages/UpdateDate";

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
            },
            {
                path: '/rooms',
                element: <Rooms />,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/rooms`)
            },
            {
                path: '/rooms/:id',
                element: <PrivateRoute><RoomDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/rooms/${params.id}`)
            },
            {
                path: '/my-bookings',
                element: <PrivateRoute><MyBookings /></PrivateRoute>
            },
            {
                path: '/update-date/:id',
                element: <UpdateDate />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/update-date/${params.id}`)
            }
        ]
    }
])
export default router;