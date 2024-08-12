import Hero from "./Hero";
import HeroHeading from "./HeroHeading";
import HeroHeadingRight from "./HeroHeadingRight";
import Flame from "./Flame";
import Navbar from "../../Components/Navbar";
import Footer from "./Footer";




const Home = ()=>{



    return(

        <>
                <Navbar />
                <Hero/>
                <HeroHeading/>
                <HeroHeadingRight/>
                <Flame/>
                <Footer/>
        </>
    )

}

export default Home