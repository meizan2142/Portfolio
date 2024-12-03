import { FaArrowDownLong, FaGithub, FaLinkedin } from "react-icons/fa6"
import { MdOutlineEventNote } from "react-icons/md"

const Hero = () => {
    return (
        <div className="flex justify-between items-center">
            {/* left text */}
            <div className=" px-9">
                <div className="mt-2">
                    <button className="border border-[#365E53] rounded-r-full rounded-l-full px-4 text-[#365E53] font-medium py-2 text-xs">&lt; <span className="text-[#365E53]">Available for hire</span> /&gt;</button>
                </div>
                <div className="mt-6 space-y-3">
                    <p className="text-[#3F7D6E] font-medium text-sm">Assalamu Alaikum <span>&gt;</span><span className="text-[#365E53]"> Welcome! I&apos;m</span></p>
                    <p className="text-[#3F7D6E] font-bold text-7xl">Saif Sultan Mizan</p>
                    <p className="text-[#365E53] font-medium text-sm">nickname <span>&lt;</span><span className="text-[#3F7D6E]"> Saif</span></p>
                </div>
                <div className="border border-[#365E53] rounded-md w-60 mt-6 h-24  p-3 space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-red-500/50" />
                        <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
                        <div className="h-2 w-2 rounded-full bg-green-500/50" />
                        <span className="text-[#365E53]">current_role.jsx</span>
                    </div>
                    <h1 className="text-[#3F7D6E] font-medium text-xl w-full">MERN Stack Developer</h1>
                </div>
                <p className="text-base font-medium text-[#DCE3E1] mt-8 w-3/4 leading-relaxed">
                    Software developer with a passion for crafting great user experiences. From responsive interfaces to full-stack applications, I build solutions that are both engaging and reliable. Discover my portfolio and explore my work.
                </p>
                <div className="mt-8 space-x-3">
                    <button className="border border-[#365E53] rounded-md px-8 py-3 duration-200 hover:bg-[#3F7D6E] text-[#DCE3E1] font-medium text-sm">
                        <p className="flex items-center gap-2">
                            View Projects
                            <FaArrowDownLong />
                        </p>
                    </button>
                    <button className="border border-[#3F7D6E] rounded-md px-8 py-3 duration-200 hover:bg-[#365E53] text-[#DCE3E1] font-medium text-sm">
                        <p className="flex items-center gap-2">
                            <MdOutlineEventNote />
                            Resume
                        </p>
                    </button>
                </div>
                <div className="border border-[#365E53] rounded-md w-40 mt-8 h-20  p-3 space-y-3">
                    <div className="flex justify-around py-3 items-center gap-3">
                        <button>
                            <a href="https://github.com/meizan2142" target="blank">
                                <FaGithub size={30} color="#365E53" />
                            </a>
                        </button>
                        <div className="h-8 border-l border-[#365E53]"></div>
                        <button>
                            <a href="https://www.linkedin.com/in/saif-mizan" target="blank">
                                <FaLinkedin size={30} color="#365E53" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            {/* side text */}
            <div className="px-8">
                fjsfjdsj
            </div>
        </div>
    )
}

export default Hero

// light text---- #3F7D6E

// dark text ---- #365E53