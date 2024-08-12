import logo from '../Footer/asset/Preview-removebg-preview.png';

const Footer = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row text-white gap-8 mt-10 justify-center items-center">
                <div className="flex flex-col md:flex-row mt-5 justify-normal gap-4 md:gap-[90px]">
                    <div className="flex flex-row gap-4 ml-4">
                        <div>
                            <img src={logo} alt="logo" className="mr-14 w-10" />
                        </div>
                        <div>
                            <p>G-Cycle</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mr-10">
                        <p>Contact</p>
                        <p>Careers</p>
                        <p>Benefits</p>
                        <p>Notice Boards</p>
                        <p>Explore</p>
                        <p>Trails</p>
                    </div>

                    <div className="flex flex-col">
                        <p>Company</p>
                        <p>About</p>
                        <p>Jobs</p>
                        <p>Support</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row ml-0 md:ml-[250px] mb-[102px] gap-5">
                    <div className="border-none">
                        <input placeholder="Enter your email" className="bg-customGreen placeholder-white" />
                    </div>
                    <div>
                        <button className="rounded-2xl bg-white text-customGreen p-1 mt-2 md:mt-[-20px]">FeedBack</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
