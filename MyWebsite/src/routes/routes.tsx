import Layout from "./Layout";
import ErrorPage from "./ErrorPage";
import AboutMe from "./AboutMe";

const routes = [
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <AboutMe/>
            }
        ]
    }
];

export default routes;