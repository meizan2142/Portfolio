import RoundaboutRightRoundedIcon from '@mui/icons-material/RoundaboutRightRounded';
import { FaArrowRightLong, FaGithub } from 'react-icons/fa6';
import { MdEmojiFlags } from 'react-icons/md';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const projectsDiv = [
    {
        id: '1',
        title: 'Taskmanagement Application',
        description: 'Full-Stack task management app where users can add tasks, task creators can manage tasks, and admins can update user roles.',
        img: 'https://i.ibb.co.com/RTVXXfp/supremacy.png',
        tool1: 'HTML',
        tool2: 'Tailwind CSS',
        tool3: 'MongoDB',
        tool4: 'Express.js',
        tool5: 'React.js',
        tool6: 'Node.js',
        codeIcon: <FaGithub />,
        demoIcon: <MdEmojiFlags />,
        liveDemo: 'https://supermacy-assignment.web.app/',
        codeLink: 'https://github.com/meizan2142/B9A12-CLIENT-SIDE'
    },
    {
        id: '2',
        title: 'Find Job',
        description: 'A platform where users can search and find jobs tailored to their skills and preferences.',
        img: 'https://i.ibb.co.com/k0j4gzQ/jobhub.png',
        tool1: 'HTML',
        tool2: 'Tailwind CSS',
        tool3: 'MongoDB',
        tool4: 'Express.js',
        tool5: 'React.js',
        tool6: 'Node.js',
        codeIcon: <FaGithub />,
        demoIcon: <MdEmojiFlags />,
        liveDemo: 'https://jwt-b9a11.web.app/',
        codeLink: 'https://github.com/meizan2142/B9A11-CLIENT-SIDE'
    },
]

const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once - while scrolling down
        });
    }, []);
    return (
        <div id="projects" className="px-9"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
        >
            <h1 className="text-[#DCE3E1] text-2xl font-medium flex items-center gap-3">
                <span className='text-[#3F7D6E]'><RoundaboutRightRoundedIcon /></span>
                Projects
                <span className="rounded-full border border-[#272E2C] py-1 px-2 text-sm text-[#3F7D6E]">main</span>
                <span className='text-[#3F7D6E] text-sm'>/</span>
                <span className="rounded-full border border-[#272E2C] py-1 px-2 text-sm text-[#3F7D6E]">demos</span>
            </h1>
            <div className="border border-[#272E2C] rounded-md desktop:w-[450px] laptopL:w-[450px] lg:mx-56 desktop:mx-0 md:mx-32 laptopL:mx-0 lg:w-[450px] mt-10 desktop:h-16 mobile:h-36 h-20  p-3 space-y-3">
                <h1 className="flex items-center gap-2 text-sm font-normal">
                    <span className='text-[#365E53]'>&gt;_</span>
                    <span className='text-[#365E53]'>projects</span>
                    <span className='text-[#365E53]'>/</span>
                    <span className='text-[#3F7D6E]'>list</span>
                    <span className='text-[#365E53]'><FaArrowRightLong size={16} /></span>
                    <span className='text-[#f3f6f5b3]'>A collection of my selected works & key projects</span>
                </h1>
            </div>
            {/* projects div */}
            <div className='mt-10 desktop:grid desktop:grid-cols-3 gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 mobile:grid mobile:space-y-4 laptopL:flex'>
                {projectsDiv.map((d) => (
                    <div
                        key={d.id}
                        className="bg-[#0F1915] border border-[#272E2C] text-white p-6 rounded-lg shadow-lg max-w-md w-full mx-auto sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl"
                    >
                        <div className="relative">
                            <img
                                src={d.img}
                                alt=""
                                className="rounded-lg w-full h-auto object-cover"
                            />
                        </div>

                        <h2 className="mt-4 text-lg font-bold text-center">{d.title}</h2>
                        <p className="mt-2 text-sm text-gray-400 text-center">
                            {d.description}
                        </p>

                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                            {d.tool1 && <span className="bg-[#3F7D6E] px-3 py-1 rounded text-xs">{d.tool1}</span>}
                            {d.tool2 && <span className="bg-[#3F7D6E] px-3 py-1 rounded text-xs">{d.tool2}</span>}
                            {d.tool3 && <span className="bg-[#3F7D6E] px-3 py-1 rounded text-xs">{d.tool3}</span>}
                            {d.tool4 && <span className="bg-[#3F7D6E] px-3 py-1 rounded text-xs">{d.tool4}</span>}
                            {d.tool5 && <span className="bg-[#3F7D6E] px-3 py-1 rounded text-xs">{d.tool5}</span>}
                            {d.tool6 && <span className="bg-[#3F7D6E] px-3 py-1 rounded text-xs">{d.tool6}</span>}
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                            <a
                                href={d.codeLink}
                                target="blank"
                                className="border border-[#272E2C] rounded-md px-8 py-3 duration-200 hover:bg-[#365E53] text-[#DCE3E1] font-medium text-sm flex items-center justify-center gap-2"
                            >
                                {d.codeIcon}
                                Code
                            </a>
                            <a
                                href={d.liveDemo}
                                target="blank"
                                className="border border-[#272E2C] rounded-md px-8 py-3 duration-200 hover:bg-[#365E53] text-[#DCE3E1] font-medium text-sm flex items-center justify-center gap-2"
                            >
                                {d.demoIcon}
                                Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects

{/* <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
</div> */}