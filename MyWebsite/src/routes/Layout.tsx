import { Outlet } from "react-router";
import Header from "../components/page/Header";
import Footer from "../components/page/Footer";
import Popup from "../components/Popup";

import '../styles/Layout.css';

function Layout()
{
    return(
        <div id="layout">
            <Header/>
            <Outlet/>
            <Popup display={!window.matchMedia('(prefers-color-scheme: light)').matches}>This site looks better in dark mode!</Popup>
            <Footer/>
        </div>
    );
}

export default Layout;