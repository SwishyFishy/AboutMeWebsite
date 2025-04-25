import { Outlet } from "react-router";
import Header from "../components/page/Header";
import Footer from "../components/page/Footer";

function Layout()
{
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;