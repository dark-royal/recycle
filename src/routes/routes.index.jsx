
import Layout1 from "../Components/Layout/layouts";
import Client from "../Pages/Clinet/client";


export const ROUTES = [
    {
        path: '/information',
        element: <Layout1/>,
        children : [
            {
                path: '',
                element: <Client/>
            },

        ]
    }]