import Content from "./Content";
import DANavbar from "./Navbar";

const AdminBar = ()=>{
    return (
        <div className="max-h-screen bg-gray-800">
            <DANavbar/>
            <Content/>
        </div>
    )
    //check
}
export default AdminBar;