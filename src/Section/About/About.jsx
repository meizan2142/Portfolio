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
            <div className="flex gap-10 mt-16">
                <div className="group relative  sm:w-[350px]">
                    {/* <p className='text-black'>saif</p> */}
                    <img width={450} height={450} className=" scale-105 transform rounded-lg bg-black/70" src="https://i.ibb.co.com/Lg6N9Q2/Whats-App-Image-2024-11-27-at-19-43-39-408c1258.jpg" alt="card navigate ui" />
                </div>
                <div>
                    <div className="border border-[#365E53] rounded-md w-[450px] mt-6 h-12  p-3 space-y-3">
                        <h1 className="flex items-center gap-2 text-sm font-normal">
                            <span className='text-[#365E53]'>&gt;_</span>
                            <span className='text-[#365E53]'>whoami</span>
                            <span className='text-[#365E53]'>/</span>
                            <span className='text-[#3F7D6E]'>info</span>
                            <span className='text-[#365E53]'><FaArrowRightLong size={16}/></span>
                            <span className='text-[#f3f6f5b3]'>MERN Stack developer brings ideas to life</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About