
import {Outlet} from 'react-router-dom'
import Footer from "../Footer";

const Layout = ()=>{


    return(

        <>

        <Footer/>
        <Outlet/>

        </>
    )


}
export default Layout