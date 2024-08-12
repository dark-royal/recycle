import Layout1 from "../Components/Layout/layouts";
import Client from "../Components/AllPages/client";
import TrashSize from "../Components/AllPages/trash";
import Pickup from "../Components/AllPages/pickup";


export const ROUTES = [
    {
        path: '/information',
        element: <Layout1 />,
        children: [
            {
                path: '',
                element: <Client />
            },
        ]
    },
    {
        element: <Layout1 />,
        children: [
            {
                path: '/size',
                 element: <TrashSize />
            },
        ]
    },

    {
        element: <Layout1 />,
        children: [
            {
                path: '/pickup',
                element: <Pickup />
            },
        ]
    }
];




