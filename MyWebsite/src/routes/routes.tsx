import Layout from "./Layout";
import ErrorPage from "./ErrorPage";
import MainPage from "./MainPage";

const routes = [
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            }
        ]
    }
];

export default routes;