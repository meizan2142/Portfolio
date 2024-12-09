import RoundaboutRightRoundedIcon from '@mui/icons-material/RoundaboutRightRounded';
import { BiLogoNetlify } from 'react-icons/bi';
import { DiMongodb } from 'react-icons/di';
import { FaArrowRightLong, FaHtml5, FaNodeJs } from 'react-icons/fa6';
import { IoLogoCss3, IoLogoFirebase, IoLogoJavascript, IoLogoVercel } from 'react-icons/io5';
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress } from 'react-icons/si';
const Skills = () => {
    return (
        <div id="skills" className="px-9">
            <h1 className="text-[#DCE3E1] text-2xl font-medium flex items-center gap-3">
                <span className='text-[#3F7D6E]'><RoundaboutRightRoundedIcon /></span>
                Skills
                <span className="rounded-full border border-[#365E53] py-1 px-2 text-sm text-[#3F7D6E]">main</span>
                <span className='text-[#3F7D6E] text-sm'>/</span>
                <span className="rounded-full border border-[#365E53] py-1 px-2 text-sm text-[#3F7D6E]">tech stack</span>
            </h1>
            <div className="border border-[#365E53] rounded-md desktop:w-[450px] laptopL:w-[450px] lg:mx-56 desktop:mx-0 md:mx-32 laptopL:mx-0 lg:w-[450px] mt-10 desktop:h-16 mobile:h-36 h-20  p-3 space-y-3">
                <h1 className="flex items-center gap-2 text-sm font-normal">
                    <span className='text-[#365E53]'>&gt;_</span>
                    <span className='text-[#365E53]'>skill</span>
                    <span className='text-[#365E53]'>/</span>
                    <span className='text-[#3F7D6E]'>list</span>
                    <span className='text-[#365E53]'><FaArrowRightLong size={16} /></span>
                    <span className='text-[#f3f6f5b3]'>Some few technologies and tools I work with to bring ideas to life</span>
                </h1>
            </div>
            <div className='mt-10 desktop:flex gap-6 md:grid md:grid-cols-2 space-y-0 mobile:space-y-5 laptopL:flex lg:flex desktop:mx-20 mobile:mx-0 laptopL:mx-0 md:mx-0'>
                {/* skills div */}
                {/* 1st div */}
                <div className="desktop:w-[350px] rounded-2xl border mobile:p-3 border-[#365E53] bg-[#0F1915] md:p-8">
                <span className="rounded-full border border-[#365E53] py-1 px-2 text-sm text-[#3F7D6E]">
                    <span>&lt;</span>
                    <span>/</span>
                    <span>&gt;</span>
                    <span> Frontend Tools</span>
                    </span>
                    <div className=' px-3 grid grid-cols-2 mobile:px-2'>
                        <div className="border border-[#365E53] bg-[#0E1715] rounded-md w-28 lg:w-24 mobile:w-24 mt-6 h-18  p-3 space-y-3">
                            <div className="flex flex-col items-center gap-3">
                                <FaHtml5 size={20} color='#3F7D6E' />
                                <h1 className="text-[#f3f6f5b3] hover:text-[#e7eeedda] font-medium text-xs">HTML</h1>
                            </div>
                        </div>
                        <div className="border border-[#365E53] bg-[#0E1715] rounded-md w-28 lg:w-24 mobile:w-24 mt-6 h-18  p-3 space-y-3">
                            <div className="flex flex-col items-center gap-3">
                                <IoLogoCss3 size={20} color='#3F7D6E' />
                                <h1 className="text-[#f3f6f5b3] hover:text-[#e7eeedda] font-medium text-xs">CSS</h1>
                            </div>
                        </div>
                        <div className="border border-[#365E53] bg-[#0E1715] rounded-md w-28 lg:w-24 mobile:w-24 mt-6 h-18  p-3 space-y-3">
                            <div className="flex flex-col items-center gap-3">
                                <IoLogoJavascript size={20} color='#3F7D6E' />
                                <h1 className="text-[#f3f6f5b3] hover:text-[#e7eeedda] font-medium text-xs">JavaScript</h1>
                            </div>
                        </div>
                        <div className="border border-[#365E53] bg-[#0E1715] rounded-md w-28 lg:w-24 mobile:w-24 mt-6 h-18  p-3 space-y-3">
                            <div className="flex flex-col items-center gap-3">
                                <RiTailwindCssFill size={20} color='#3F7D6E' />
                                <h1 className="text-[#f3f6f5b3] hover:text-[#e7eeedda] font-medium text-xs">Tailwind CSS</h1>
                            </div>
                        </div>
                        <div className="border border-[#365E53] bg-[#0E1715] rounded-md w-28 mobile:w-24 mt-6 h-18  p-3 space-y-3">
                            <div className="flex flex-col items-center gap-3">
                                <RiReactjsLine size={20} color='#3F7D6E' />
                                <h1 className="text-[#f3f6f5b3] hover:text-[#e7eeedda] font-medium text-xs">React.js</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2nd div */}
                <div className="desktop:w-[350px] rounded-2xl border mobile:p-3  border-[#365E53] bg-[#0F1915] md:p-8">
                <span className="rounded-full border border-[#365E53] py-1 px-2 text-sm text-[#3F7D6E]">
                    <span>&lt;</span>
                    <span>/</span>
                    <span>&gt;</span>
                    <span> Development Tools</span>
                    </span>
                    <div className=' px-3 grid grid-cols-2 mobile:p-2'>
                        <div className="border border-[#365E53] bg-[#0E1715] rounded-md w-28 lg:w-24 mobile:w-24 mt-6 h-18  p-3 space-y-3">
                            <div className="flex flex-col items-center gap-3">
                                <IoLogoVercel size={20} color='#3F7D6E' />
                                <h1 className="text-[#f3f6f5b3] hover:text-[#e7eeedda] font-medium text-xs">Vercel</h1>
                            </div>
                        </div>
                        <div className="border border-[#365E53] bg-[#0E1715] rounded-md w-28 lg:w-24 mobile:w-24 mt-6 h-18  p-3 space-y-3">
                            <div className="flex flex-col items-center gap-3">
                                <IoLogoFirebase size={20} color='#3F7D6E' />
                                <h1 className="text-[#f3f6f5b3] hover:text-[#e7eeedda] font-medium text-xs">Firebase</h1>
                            </div>
                        </div>
                        <div className="border border-[#365E53] bg-[#0E1715] rounded-md w-28 mobile:w-24 mt-6 h-18  p-3 space-y-3">
                            <div className="flex flex-col items-center gap-3">
                                <BiLogoNetlify size={20} color='#3F7D6E' />
                                <h1 className="text-[#f3f6f5b3] hover:text-[#e7eeedda] font-medium text-xs">Netlify</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3rd div */}
                <div className="desktop:w-[350px] rounded-2xl border mobile:p-3  border-[#365E53] bg-[#0F1915] md:p-8">
                <span className="rounded-full border border-[#365E53] py-1 px-2 text-sm text-[#3F7D6E]">
                    <span>&lt;</span>
                    <span>/</span>
                    <span>&gt;</span>
                    <span> Backend & Database</span>
                    </span>
                    <div className=' px-3 grid grid-cols-2 mobile:p-2'>
                        <div className="border border-[#365E53] bg-[#0E1715] rounded-md w-28 lg:w-24 mobile:w-24 mt-6 h-18  p-3 space-y-3">
                            <div className="flex flex-col items-center gap-3">
                                <DiMongodb size={20} color='#3F7D6E' />
                                <h1 className="text-[#f3f6f5b3] hover:text-[#e7eeedda] font-medium text-xs">MongoDB</h1>
                            </div>
                        </div>
                        <div className="border border-[#365E53] bg-[#0E1715] rounded-md w-28 lg:w-24 mobile:w-24 mt-6 h-18  p-3 space-y-3">
                            <div className="flex flex-col items-center gap-3">
                                <SiExpress size={20} color='#3F7D6E' />
                                <h1 className="text-[#f3f6f5b3] hover:text-[#e7eeedda] font-medium text-xs">Express.js</h1>
                            </div>
                        </div>
                        <div className="border border-[#365E53] bg-[#0E1715] rounded-md w-28 mobile:w-24 mt-6 h-18  p-3 space-y-3">
                            <div className="flex flex-col items-center gap-3">
                                <FaNodeJs size={20} color='#3F7D6E' />
                                <h1 className="text-[#f3f6f5b3] hover:text-[#e7eeedda] font-medium text-xs">Node.js</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills