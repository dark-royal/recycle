
import {Outlet} from 'react-router-dom'
import Home from "../../Pages/Home";

const Layout = ()=>{


    return(
        <>
            <Home/>
        <Outlet/>
        </>
    )


}
export default Layout