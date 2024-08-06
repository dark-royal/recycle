import myImage from './asset/Column.png'
const Hero = ()=>{


    return(

        <>

            <div className="bg-customGreen mt-[10px] h-[400px] flex flex-row">

                <div>

                    <div className="mt-[20px] ml-[90px]">

                        <h1 className="font-bold text-white text-[50px] mb-3">
                            G-Cycle is the
                            <br/> New Gold Mine
                        </h1>

                    </div>

                    <div>
                        <p className="text-white ml-[90px]">
                            Sustainable Dispose,Earn Rewards:Discover the nearest<br/>
                            G-Cycle collection center,Learn About the Impact, and Earn
                            <br/>Credits for Reasonable Recycling
                        </p>
                    </div>

                    <div className="ml-[90px] mt-5">
                        <button className="bg-white text-green-600 rounded-2xl p-1">
                            Earn from G-cycle
                        </button>
                    </div>


                </div>


                <div>

                    <img src={myImage} alt="myImage" className="w-[400px] ml-[400px] mt-7"/>
                </div>


            </div>

        </>
    )


}
export default Hero