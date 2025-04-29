import Layout from "./Layout";
import ErrorPage from "./ErrorPage";
import AboutMe from "./AboutMe";
import MyCv from "./MyCv";
import ContactMe from "./ContactMe";
import Projects from "./Projects";

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
                path: "/projects",
                element: <Projects/>
            }
        ]
    }
];

export default routes;