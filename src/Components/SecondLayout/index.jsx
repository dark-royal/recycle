import Footer from "../Footer/footer";
import {Outlet} from "react-router-dom";

const Layout = ()=>{


    return(

        <>

            <Footer/>
            <Outlet/>

        </>
    )


}
export default Layout
