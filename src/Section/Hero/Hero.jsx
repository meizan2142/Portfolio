import { Fade, Slide } from "react-awesome-reveal"
import { FaArrowDownLong, FaGithub, FaLinkedin } from "react-icons/fa6"
import { MdOutlineEventNote } from "react-icons/md"

const Hero = () => {
    return (
        <div className="desktop:flex desktop:justify-between desktop:items-center laptopL::flex laptopL:justify-between laptopL:items-center lg:flex lg:justify-between lg:items-center mobile:grid">
            {/* left text */}
            <div id="home" className=" px-9">
                <Slide className="mt-2">
                    <button className="border border-[#272E2C] rounded-r-full rounded-l-full px-4 text-[#365E53] font-medium py-2 text-xs">&lt; <span className="text-[#365E53]">Available for hire</span> /&gt;</button>
                </Slide>
                <div className="mt-6 space-y-3">
                    <p className="text-[#3F7D6E] font-medium text-sm">Assalamu Alaikum <span>&gt;</span><span className="text-[#365E53]"> Welcome! I&apos;m</span></p>
                    <Fade delay={1e3} cascade damping={1e-1} className="text-[#3F7D6E] font-bold desktop:text-7xl mobile:text-4xl md:text-7xl lg:text-7xl laptopL:text-7xl">Saif Sultan Mizan</Fade>
                    <p className="text-[#365E53] font-medium text-sm">nickname <span>&lt;</span><span className="text-[#3F7D6E]"> Saif</span></p>
                </div>
                <div className="border border-[#272E2C] rounded-md w-60 mt-6 h-24  p-3 space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-red-500/50" />
                        <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
                        <div className="h-2 w-2 rounded-full bg-green-500/50" />
                        <span className="text-[#365E53]">current_role.jsx</span>
                    </div>
                    <div className="group relative inline-block cursor-pointer overflow-hidden">
                        {/* Default visible text */}
                        <span className="inline-block w-full text-[#3F7D6E] font-medium text-xl whitespace-nowrap transition-transform duration-500 group-hover:-translate-y-full">
                            MERN Stack Developer
                        </span>

                        {/* Text that appears on hover */}
                        <span className="absolute left-0 top-full w-full text-[#3F7D6E] font-medium text-xl whitespace-nowrap transition-transform duration-500 group-hover:-translate-y-full">
                            Frontend Developer
                        </span>
                    </div>
                </div>
                <p className="text-base font-normal text-[#DCE3E1] mt-8 desktop:w-3/4 leading-relaxed">
                    Junior MERN Stack developer with a passion for crafting great user experiences. From responsive interfaces to full-stack applications, I build solutions that are both engaging and reliable. Discover my portfolio and explore my work.
                </p>
                <div className="mt-8 space-x-3 space-y-3">
                    <button className="border border-[#272E2C] rounded-md px-8 py-3 duration-200 hover:bg-[#3F7D6E] text-[#DCE3E1] font-medium text-sm">
                        <a href="/#projects">
                            <p className="flex items-center gap-2">
                                View Projects
                                <FaArrowDownLong />
                            </p>
                        </a>
                    </button>
                    <button className="border border-[#272E2C] rounded-md px-8 py-3 duration-200 hover:bg-[#365E53] text-[#DCE3E1] font-medium text-sm">
                        <a href="https://drive.google.com/file/d/1Qrw9blM9LuKbXjtPekLStH1j2PkbwW2S/view?usp=sharing"
                            target="blank"
                            className="flex items-center gap-2">
                            <MdOutlineEventNote />
                            Resume
                        </a>
                    </button>
                </div>
                <div className="border border-[#272E2C] rounded-md w-40 mt-8 h-20 p-3 space-y-3">
                    <div className="flex justify-around py-3 items-center gap-3">
                        <button>
                            <a href="https://github.com/meizan2142" target="blank">
                                <FaGithub size={30} color="#365E53" />
                            </a>
                        </button>
                        <div className="h-8 border-l border-[#272E2C]"></div>
                        <button>
                            <a href="https://www.linkedin.com/in/saif-mizan" target="blank">
                                <FaLinkedin size={30} color="#365E53" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            {/* side text */}
            <div className="px-8 md:flex md:gap-5 desktop:grid">
                <div className="flex gap-3 border border-[#272E2C] rounded-md items-center w-60 mt-6 h-20 px-8">
                    <p className="text-base font-medium text-[#3F7D6E]"><span>&lt;</span><span>/</span><span>&gt;</span></p>
                    <h1 className="text-[#3F7D6E] font-medium text-base">Junior MERN Stack Developer</h1>
                </div>
                {/* border border-[#272E2C] rounded-md */}
                <div className="flex gap-3 border border-[#272E2C] rounded-md items-center w-60 mt-6 h-20 px-8">
                    <p className="text-base font-medium text-[#3F7D6E]"><span>&lt;</span><span>/</span><span>&gt;</span></p>
                    <h1 className="text-[#3F7D6E] font-medium text-base">Junior Frontend Developer</h1>
                </div>
            </div>
        </div>
    )
}

export default Hero

// light text---- #3F7D6E

// dark text ---- #365E53