import RoundaboutRightRoundedIcon from '@mui/icons-material/RoundaboutRightRounded';
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
            <div className="desktop:flex desktop:justify-between desktop:items-center mt-10">
                {/* <div>
                    <img src="https://i.ibb.co.com/Lg6N9Q2/Whats-App-Image-2024-11-27-at-19-43-39-408c1258.jpg" alt="" />
                </div> */}
                <div className="group relative  sm:w-[350px]">
                    <img width={350} height={350} className=" scale-105 transform rounded-lg bg-black/70" src="https://i.ibb.co.com/Lg6N9Q2/Whats-App-Image-2024-11-27-at-19-43-39-408c1258.jpg" alt="card navigate ui" />
                </div>
                <div>text</div>
            </div>
        </div>
    )
}

export default About