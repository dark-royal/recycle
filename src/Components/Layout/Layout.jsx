import {Outlet} from 'react-router-dom'
import Foot from "../../Pages/Home/Footer";

const Layout = ()=>{


    return(

        <>

            <Foot/>
            <Outlet/>

        </>
    )


}
export default Layout