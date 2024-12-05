import Navbar from "../../Navbar/Navbar"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Hero from "../Hero/Hero"
import Projects from "../Projects/Projects"
import Skills from "../Skills/Skills"

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
            <div className="mt-20">
                <Skills/>
            </div>
            <div className="mt-20">
                <Projects/>
            </div>
            <div className="mt-20">
                <Contact/>
            </div>
        </div>
    )
}

export default HomeSection