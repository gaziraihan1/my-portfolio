import { createBrowserRouter } from "react-router";
import MainLayout from "../Pages/LayoutPage/MainLayout";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'blogs',
                Component: Blogs
            }
        ]
    }
])