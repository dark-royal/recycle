import DNavbar from "./navbar/DNavbar";
import DSidebar from "./sidebar/DSidebar";
import DashBarView from "./contentbar/DashBarView";
import RightSidebar from "./sidebar/RightSidebar";

const DashBar = () => {
    return (
        <>
            <DNavbar />
                <DSidebar />
                <DashBarView />
                <RightSidebar />
        </>
    );
}

export default DashBar;
