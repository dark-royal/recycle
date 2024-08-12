import LanguageSelect from "./LanguageSelect";

const DNavbar = () => {
    return(
        <>
            <div className="flex flex-col md:flex-row items-center p-4 bg-white">
                <div className="flex flex-col md:flex-row items-center gap-12 mb-4 md:mb-0 ml-auto">
                    <p className="text-green-500">Home</p>
                    <p className="text-green-500">Locate</p>
                    <p className="text-green-500">Dashboard</p>
                    <p className="text-green-500">About us</p>
                    <button className="bg-green-500 text-amber-50 rounded-full p-4">Earnings</button>
                </div>
                <LanguageSelect/>
            </div>
        </>
    )
}
export default DNavbar;