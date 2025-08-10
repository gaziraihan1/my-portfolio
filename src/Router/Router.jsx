import { createBrowserRouter } from "react-router";
import MainLayout from "../Pages/LayoutPage/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProjectDetails from "../Pages/project-details/ProjectDetails";
import ProjectLayout from "../Pages/LayoutPage/ProjectLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            
        ]
    },
    {
        path: '*',
        Component: ErrorPage
    },
    {
        path: '/',
        Component: ProjectLayout,
        children: [
            {
                path: 'project-details/:id',
                Component: ProjectDetails
            }
        ]
    }
])