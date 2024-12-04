import Navbar from "../../Navbar/Navbar"
import About from "../About/About"
import Hero from "../Hero/Hero"

const HomeSection = () => {
    return (
        <div className="">
            <div>
                <Navbar />
            </div>
            <div>
                <Hero/>
            </div>
            <div className="mt-20">
                <About/>
            </div>
        </div>
    )
}

export default HomeSection