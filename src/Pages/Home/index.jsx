import Hero from "./Hero";
import HeroHeading from "./HeroHeading";
import HeroHeadingRight from "./HeroHeadingRight";
import Flame from "./Flame";
import Navbar from "../../Components/Navbar";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="bg-customGreen min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">
                <Hero />
                <HeroHeading />
                <HeroHeadingRight />
                <Flame />
            </div>
            <Footer className="mt-auto" />
        </div>
    );
};

export default Home;
