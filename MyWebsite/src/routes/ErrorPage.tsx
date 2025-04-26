import Footer from '../components/page/Footer';
import Header from '../components/page/Header';

import '../styles/ErrorPage.css';

function ErrorPage()
{
    return(
        <div id="layout">
            <Header/>
            <p>Error 404 - Page Not Found</p>
            <Footer/>
        </div>
    );
}

export default ErrorPage;