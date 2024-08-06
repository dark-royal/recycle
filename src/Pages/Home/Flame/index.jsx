import maps from '../Flame/asset/Screenshot 2023-09-23 152338 1.png'
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

                <div className="bg-customGreen box-border flex flex-row mt-10 rounded-[30px] mb-3 p-2">

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

                <div>


                    <div>

                        <div>

                        </div>

                        <div>


                        </div>

                    </div>

                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <div>

                        <div></div>
                        <div></div>
                        <div></div>

                    </div>


                </div>

            </div>

        </>


    )


}
export default Flame;