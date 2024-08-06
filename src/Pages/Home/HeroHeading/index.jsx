
import image1 from '../Hero/asset/image 2.png'
import image2 from '../Hero/asset/image 3.png'
import image3 from '../Hero/asset/image 5.png'

const HeroHeading = ()=>{
    return(

        <>
            <div className=" flex flex-row space-x-[180px] bg-white rounded-2xl p-4">
                <div className="mt-10 ml-[120px]">
                    <p className="text-green-500">Features</p>
                    <h3 className="text-2xl text-green-500 font-semibold mb-4">What We Do<br/> With Your Waste</h3>
                    <button className="bg-green-500 text-white p-2 rounded-2xl mb-5">Learn More</button>
                </div>

               <div className="flex flex-row space-x-[50px] justify-end mt-10" >

                   <div>

                       <div>

                           <img src={image1} alt="image1" className="w-[200px]"/>
                       </div>

                       <div>
                           <p className="text-green-500">Collection</p>
                       </div>

                       <div>
                           {/*<p className="text-green-500" style={{textAlign:'center'}}>*/}
                           {/*    We provide convenient drop-off locations and pickup service to make recycling*/}
                           {/*    and make sure your old devices are properly collected to avoid improper*/}
                           {/*    disposal*/}

                           {/*</p>*/}

                       </div>


                   </div>


                   <div>

                       <div>

                           <img src={image2} alt="image2" className="w-[200px]"/>

                       </div>
                       <div>

                             <p className="text-green-500">Processing</p>

                       </div>

                       <div>

                           {/*<p className="text-green-500" style={{textAlign:'center'}}>*/}
                           {/*    We provide convenient drop-off locations and pickup service to make recycling your*/}
                           {/*    g-cycle hassle free your old devices are properly collected to avoid improper*/}
                           {/*    disposal*/}
                           {/*</p>*/}

                       </div>

                   </div>


                   <div>

                       <div>

                           <img src={image3} alt="image3" className="w-[200px]"/>

                       </div>
                       <div>

                       <p className="text-green-500">Save the Earth</p>

                       </div>

                       <div>

                           {/*<p className="text-green-500" style={{textAlign:'center'}}>*/}

                           {/*    We provide convenient drop-off locations and pickup service to make recycling your*/}
                           {/*    g-cycle hassle free your old devices are properly collected to avoid improper*/}
                           {/*    disposal*/}

                           {/*</p>*/}

                       </div>
                   </div>


               </div>

            </div>
        </>

    )


}

export default HeroHeading