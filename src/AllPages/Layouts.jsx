import Navb from "./Navbar/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "./Footer/fotter";

const Layouts = () => {
    return(
        <>
        <Navb/>
            <Outlet/>
            <Footer/>
        </>

    )
}
export default Layouts;