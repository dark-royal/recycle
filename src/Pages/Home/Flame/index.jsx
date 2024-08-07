import maps from '../Flame/asset/Screenshot 2023-09-23 152338 1.png'
import link1 from '../Flame/asset/Link (1).png'
import link2 from '../Flame/asset/Link (2).png'
import link3 from '../Flame/asset/Link (3).png'
import link4 from '../Flame/asset/Link (4).png'
import link5 from '../Flame/asset/Link (5).png'
import link6 from '../Flame/asset/Link (6).png'
import vector1 from './asset/vector0.png'
import vector2 from '../Flame/asset/Vector (27).png'
import search from '../Flame/asset/search (1).png'
import vector3 from '../Flame/asset/Vector (28).png'
import vector4 from '../Flame/asset/Vector (29).png'

const Flame = ()=>{

    return(

        <>


            <div className="bg-white rounded-2xl p-4">

                <div>

                    <h2 className="text-green-500 ml-[120px] font-thin text-3xl mt-3">

                        How Does The Process Work

                    </h2>

                </div>

                <div className="bg-customGreen box-border flex flex-row mt-10 rounded-[30px] mb-3 p-2 justify-center items-center">

                    <div className="ml-[120px] space-y-4 mt-12">

                        <div className="flex flex-row gap-4">
                            <div>
                                <img src={vector1} alt="vector1" className="w-10"/>
                            </div>

                            <div>
                                <p className="text-3xl text-white">Locate</p>
                            </div>

                        </div>

                        <div className="flex flex-row gap-4">


                            <div>
                                <img src={vector2} alt="vector2" className="w-10"/>

                            </div>
                            <div>

                                <p className="text-3xl text-white">Collect</p>
                            </div>

                        </div>


                        <div className="flex flex-row gap-4">
                            <div>
                                <img src={vector3} alt="vecor3" className="w-10"/>
                            </div>

                            <div>
                                <p className="text-3xl text-white">Pick Up</p>

                            </div>

                        </div>


                        <div className="flex flex-row gap-4">

                            <div>

                                <img src={vector4} alt="vector4" className="w-8"/>
                            </div>

                            <div>

                                <p className="text-3xl text-white">Earn</p>
                            </div>


                        </div>


                    </div>

                    <div>

                        <div className="flex flex-row">

                            <div>

                                <img src={maps} alt="maps" className="w-[350px] ml-[500px] mt-10"/>

                            </div>

                            <div>
                                <img src={search} alt="search" className="ml-1 bg-customGreen mr-4"/>
                            </div>

                            <div>
                                <input placeholder="search" className="bg-customGreen mr-6 "/>
                            </div>

                        </div>
                        <div>


                        </div>


                    </div>

                </div>

                <div className="bg-customGreen rounded-2xl">


                    <div>

                        <div>
                                <h4 className="text-center text-green-600 text-custom-32">Services We Provide</h4>
                        </div>

                        <div>
                            <p className="text-center text-white">We offer total solution for End to end Recycle of G-cycle with state of art recycling.We also support CSR Services,Epr<br/>implementation and Date Destruction Service </p>

                        </div>

                    </div>


                    <div className="flex flex-row mt-10 p-10 justify-center items-center">
                        <div>
                            <div className=" flex justify-center">
                                <img src={link1} alt="link1" className="justify-items-center"/>
                            </div>
                            <div>
                                <h4 className="text-center text-white mt-5">Recycling of G-Cycle</h4>
                            </div>
                            <div>
                                <p className="text-center text-white mt-5">Envirocare is engage in Recycling of Electrical and Electronic
                                    Equipment Waste (WEEE). The aim of the company is to
                                    conserve the environment and natural resources.</p>
                            </div>

                        </div>


                        <div className="mt-5">
                            <div className=" flex justify-center">
                                <img src={link2} alt="link2" />
                            </div>
                            <div>
                                <h4  className="text-center text-white mt-5">Pick up from your home</h4>
                            </div>
                            <div>
                                <p className="text-center text-white mt-5">Envirocare support Manufacturer, Importer of Electronics
                                    equipments , for implementing their EPR plan and achieving
                                    their target by recycling of e-waste.</p>
                            </div>

                        </div>


                        <div className="mb-11">

                            <div className=" flex justify-center">
                                <img src={link3} alt="link3"/>
                            </div>
                            <div>
                                <h4  className="text-center text-white mt-5">CSR Services</h4>
                            </div>
                            <div>
                                <h4 className="text-center text-white mt-5">
                                    We support large corporates for their CSR target by installing
                                    E Bin, setting of collection Center, running collection Drive for
                                    e-waste, conducting training and awareness program.
                                </h4>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-row justify-center items-center mt-10 ">

                        <div>

                            <div className=" flex justify-center">
                                <img src={link4} alt="link4"/>
                            </div>
                            <div>
                                <h4  className="text-center text-white mt-5">Data Destruction</h4>
                            </div>
                            <div>
                                <p className="text-center text-white mt-5">Envirocare offer services of Data Destruction for its customer
                                    by destroying data store on tapes, hard Disk and other forms
                                    of electronic media.</p>
                            </div>


                        </div>

                        <div>

                            <div className=" flex justify-center">
                                <img src={link5} alt="link5"/>
                            </div>
                            <div>
                                <h4  className="text-center text-white mt-5">Recycling and Refining</h4>
                            </div>
                            <div>
                                <p className="text-center text-white mt-5">
                                    E-waste consist more than 35 substance in which some are
                                    recyclable, Precious, Special, & Hazardous metals These
                                    metals require special process for recovery and refining.
                                </p>
                            </div>


                        </div>

                        <div>
                            <div className=" flex justify-center">
                                <img src={link6} alt="link6"/>
                            </div>
                            <div>
                                <h4  className="text-center text-white mt-5">Refurbishing</h4>
                            </div>
                            <div>

                                <p className="text-center text-white mt-5">Envirocare has its own Repair and Refurbishing centre for E-
                                    waste received from generator. We have a skilled team of
                                    Engineers Technicians.</p>
                            </div>

                        </div>

                    </div>


                </div>

            </div>

        </>


    )


}
export default Flame;