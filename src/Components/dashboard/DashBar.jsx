import DNavbar from "./navbar/DNavbar";
import DSidebar from "./sidebar/DSidebar";
import DashBarView from "./contentbar/DashBarView";
import RightSidebar from "./sidebar/RightSidebar";

const DashBar = () => {
    return (
        <div style={{ width: '80%', maxWidth: '80vw', margin: '0 auto' }}>
            <DNavbar />
                <DSidebar />
                <DashBarView />
                <RightSidebar />
        </div>
    );
}

export default DashBar;
