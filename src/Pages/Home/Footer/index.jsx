
import logo from '../Footer/asset/Preview-removebg-preview.png'
const Footer = ()=>{


    return(

        <>

        <div className="flex flex-row justify-center items-center text-white">

            <div className="flex flex-row">
                <div>
                    <img src={logo} alt="logo"/>
                    <p>G-Cycle</p>
                </div>


            </div>

            <div>
                <p>Contact</p>
                <p>Careers</p>
                <p>Benefits</p>
                <p>Notice Boards</p>
                <p>Explore</p>
                <p>Trails</p>

            </div>


            <div>
                <p>Company</p>
                <p>About</p>
                <p>Jobs</p>
                <p>Support</p>

            </div>


            <div>

                <div>
                    <img/>
                </div>

                <div>

                    <button>FeedBack</button>
                </div>

            </div>



        </div>


        </>


    )



}
export default Footer