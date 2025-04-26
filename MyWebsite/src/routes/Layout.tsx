import { Outlet } from "react-router";
import Header from "../components/page/Header";
import Footer from "../components/page/Footer";

import '../styles/Layout.css';

function Layout()
{
    return(
        <div id="layout">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;