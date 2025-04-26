import Layout from "./Layout";
import ErrorPage from "./ErrorPage";
import AboutMe from "./AboutMe";
import MyCv from "./MyCv";
import ContactMe from "./ContactMe";
import SmallProjects from "./SmallProjects";
import LargeProjects from "./LargeProjects";

const routes = [
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <AboutMe/>
            },
            {
                path: "/cv",
                element: <MyCv/>
            },
            {
                path: "/contact",
                element: <ContactMe/>
            },
            {
                path: "/smallprojects",
                element: <SmallProjects/>
            },
            {
                path: "/largeprojects",
                element: <LargeProjects/>
            },
        ]
    }
];

export default routes;