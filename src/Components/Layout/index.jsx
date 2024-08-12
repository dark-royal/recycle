
import {Outlet} from 'react-router-dom'
import Navbar from "../Navbar/index.jsx";
import Footer from "../Footer/footer.jsx";

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