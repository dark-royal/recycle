
import Home from "../Pages/Home";
import Layout from "../Components/Layout";

export const ROUTES = [
    {
        path: '/information',
        element: <Layout/>,
        children : [
            {
                path: '',
                element: <Home/>
            },

        ]
    }]