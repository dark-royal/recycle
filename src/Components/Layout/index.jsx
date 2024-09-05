
import {Outlet} from 'react-router-dom'
import Home from "../../Pages/Home";

const Layout = ()=>{


    return(
        <div className="bg-customGreen min-h-screen p-4">
            <Home/>
            <Outlet/>
        </div>
    )


}
export default Layout