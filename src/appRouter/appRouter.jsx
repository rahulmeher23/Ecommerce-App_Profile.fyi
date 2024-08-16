import { createBrowserRouter } from "react-router-dom";
import Layout from "../appLayout/appLayout";
import Home from "../pages/Home";

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: '1',
                path: "",
                element: <Home />
            }
        ]
    }
])