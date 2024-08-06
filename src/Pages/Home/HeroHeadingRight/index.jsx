import image1 from '../HeroHeadingRight/asset/image 7.png'
import image2 from '../HeroHeadingRight/asset/image 8.png'
import image3 from '../HeroHeadingRight/asset/image 9 (1).png'

const HeroHeadingRight = () => {


    return(

        <>

        <div className="bg-green-500 text-white flex flex-row mt-15">

            <div className="mt-10">

                <h2 className="font-semibold text-3xl ml-[120px]">What will <br/> you get by <br/>giving away<br/> your waste</h2>
                <button className="text-green-500 bg-white p-2 rounded-2xl ml-[120px] mt-10">Learn More</button>

            </div>


            <div className=" ml-[180px] flex flex-row space-x-[50px] mt-10 mb-10">


                <div>

                    <div>

                        <img src={image1} alt="image1" className="w-[200px]"/>

                    </div>
                    <div>
                        <p className="mt-10">Clean your home from g-cycle</p>
                    </div>
                    <div>
                        <p className="mt-3">Clean your home from the piles<br/> of g-cycle without worry</p>
                    </div>

                </div>



                <div>

                    <div>
                        <img src={image2} alt="image2" className="w-[200px]"/>

                    </div>
                    <div>

                        <p className="mt-12">Earn rewards and cash</p>

                    </div>

                    <div>

                        <p className="mt-3">Collect point from your g-cycle<br/> and turn into cah and vouchers</p>

                    </div>

                </div>


                <div>

                    <div>
                        <img src={image3} alt="image3" className="w-[200px]"/>

                    </div>


                    <div>

                        <p className="mt-12">
                            Support a nature
                        </p>

                    </div>


                    <div>
                            <p className="mt-3">
                                Your valuable contribution in saving<br/>nature

                            </p>
                    </div>

                </div>


            </div>









        </div>

        </>


    )


}

export default HeroHeadingRight







