
import Footer from "../Footer/footer";
import Navbar1 from "../Navber1/navbar";
import {Outlet} from "react-router-dom";

const Layout1 = () => {
    return (
        <>
            <Navbar1/>
            <Outlet/>
            <Footer/>
        </>
    )

}
export default Layout1

