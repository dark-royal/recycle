
import {Outlet} from 'react-router-dom'
import Footer from "../Footer";
import Navbar from "../Navbar/index.jsx";

const Layout = ()=>{


    return(
    <>
        <Navbar/>
        <Footer/>
        <Outlet/>
    </>
    )


}
export default Layout