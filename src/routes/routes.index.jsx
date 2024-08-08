import Layout1 from "../Components/Layout/layouts";
import Client from "../Pages/Clinet/client";
import TrashSize from "../Pages/SizeTrash/trash";


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
    }
];




