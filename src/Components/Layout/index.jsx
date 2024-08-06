import Navbar from "../Navbar";
import {Outlet} from 'react-router-dom'
import Footer from "../Footer";

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