import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Template = () => {
  
    const location = useLocation();
    const authenticated = location.pathname !== '/login';
  
    return (
        
        <div className="auth-template">
            <Header authenticated={authenticated} />
            <div className="body">
                <Outlet></Outlet>
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    );
}

export default Template;