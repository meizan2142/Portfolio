import RoundaboutRightRoundedIcon from '@mui/icons-material/RoundaboutRightRounded';
import { FaArrowRightLong } from 'react-icons/fa6';
const About = () => {

    return (
        <div id='about' className="px-9">
            <h1 className="text-[#DCE3E1] text-2xl font-medium flex items-center gap-3">
                <span className='text-[#3F7D6E]'><RoundaboutRightRoundedIcon /></span>
                About Me
                <span className="rounded-full border border-[#365E53] py-1 px-2 text-sm text-[#3F7D6E]">main</span>
                <span className='text-[#3F7D6E] text-sm'>/</span>
                <span className="rounded-full border border-[#365E53] py-1 px-2 text-sm text-[#3F7D6E]">hello</span>
            </h1>
            {/* <div className="desktop:flex mobile:grid md:grid lg:flex lg:items-center lg:justify-between laptopL:items-center laptopL:justify-between  mt-10"> */}
            <div className="desktop:flex mobile:grid gap-10 mt-16">
                <div className="group relative  sm:w-[350px]">
                    {/* <p className='text-black'>saif</p> */}
                    <img width={450} height={450} className=" scale-105 transform rounded-lg bg-black/70" src="https://i.ibb.co.com/Lg6N9Q2/Whats-App-Image-2024-11-27-at-19-43-39-408c1258.jpg" alt="card navigate ui" />
                </div>
                <div className='space-y-10'>
                    <div className="border border-[#365E53] rounded-md desktop:w-[450px] mt-6 desktop:h-12 h-20  p-3 space-y-3">
                        <h1 className="flex items-center gap-2 text-sm font-normal">
                            <span className='text-[#365E53]'>&gt;_</span>
                            <span className='text-[#365E53]'>whoami</span>
                            <span className='text-[#365E53]'>/</span>
                            <span className='text-[#3F7D6E]'>info</span>
                            <span className='text-[#365E53]'><FaArrowRightLong size={16} /></span>
                            <span className='text-[#f3f6f5b3]'>MERN Stack developer brings ideas to life</span>
                        </h1>
                    </div>
                    <div className='space-y-2 desktop:w-[700px] text-[#f3f6f5cc] font-normal text-base'>
                        <p>
                            Hello, I&apos;m Saif. I love creating websites and applications that not only look great but also work smoothly. What started as just being curious about how websites work has grown into something I&apos;m truly passionate about.
                        </p>
                        <p>
                            When I&apos;m working on projects, I always aim for clean and efficient solutions. I enjoy the challenge of turning complex problems into simple, user-friendly experiences. Every project is a chance to learn something new and create something meaningful.
                        </p>
                        <p>
                            Beyond coding, I&apos;m always exploring new technologies and keeping up with the latest in web development & tech in general. I believe that staying curious and continuously learning is what makes a great developer and engineer. This mindset helps me bring fresh ideas and better solutions to every project I work on.
                        </p>
                    </div>
                    <div className='desktop:flex mobile:grid md:grid gap-4'>
                        <div className="border border-[#365E53] rounded-md desktop:w-80 mt-6 desktop:h-44  p-3 space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-red-500/50" />
                                <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
                                <div className="h-2 w-2 rounded-full bg-green-500/50" />
                                <span className="text-[#365E53]">current_role.jsx</span>
                            </div>
                            <h1 className="text-[#3F7D6E] font-medium text-xl w-full">MERN Stack Developer</h1>
                        </div>
                        <div className="border border-[#365E53] rounded-md desktop:w-80 mt-6 desktop:h-44  p-3 space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-red-500/50" />
                                <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
                                <div className="h-2 w-2 rounded-full bg-green-500/50" />
                                <span className="text-[#365E53]">current_role.jsx</span>
                            </div>
                            <h1 className="text-[#3F7D6E] font-medium text-xl w-full">MERN Stack Developer</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About