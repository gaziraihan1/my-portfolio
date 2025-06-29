import { createBrowserRouter } from "react-router";
import MainLayout from "../Pages/LayoutPage/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
        path: '*',
        Component: ErrorPage
    }
])