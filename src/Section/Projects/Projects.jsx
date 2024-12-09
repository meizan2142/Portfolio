import RoundaboutRightRoundedIcon from '@mui/icons-material/RoundaboutRightRounded';
import { FaArrowRightLong, FaGithub } from 'react-icons/fa6';
import { MdEmojiFlags } from 'react-icons/md';
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
    return (
        <div id="projects" className="px-9">
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
                {projectsDiv.map((d) => <div key={d.id} className="bg-[#0F1915] border border-[#272E2C] text-white p-6 rounded-lg max-w-md mx-auto shadow-lg">
                    <div className="relative">
                        <img
                            src={d.img}
                            alt="Abdamin International Limited"
                            className="rounded-lg"
                        />
                    </div>

                    <h2 className="mt-4 text-lg font-bold">{d.title}</h2>
                    <p className="mt-2 text-sm text-gray-400">
                        {d.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        <span className="bg-[#3F7D6E] px-3 py-1 rounded text-xs">{d.tool1}</span>
                        <span className="bg-[#3F7D6E] px-3 py-1 rounded text-xs">{d.tool2}</span>
                        <span className="bg-[#3F7D6E] px-3 py-1 rounded text-xs">{d.tool3}</span>
                        <span className="bg-[#3F7D6E] px-3 py-1 rounded text-xs">{d.tool4}</span>
                        <span className="bg-[#3F7D6E] px-3 py-1 rounded text-xs">{d.tool5}</span>
                        <span className="bg-[#3F7D6E] px-3 py-1 rounded text-xs">{d.tool6}</span>
                    </div>
                    <div className="flex justify-between mt-4">
                        <button className="border border-[#272E2C] rounded-md px-8 py-3 duration-200 hover:bg-[#365E53] text-[#DCE3E1] font-medium text-sm">
                            <a href={d.codeLink}
                                target="blank"
                                className="flex items-center gap-2">
                                {d.codeIcon}
                                Code
                            </a>
                        </button>
                        <button className="border border-[#272E2C] rounded-md px-8 py-3 duration-200 hover:bg-[#365E53] text-[#DCE3E1] font-medium text-sm">
                            <a href={d.liveDemo}
                                target="blank"
                                className="flex items-center gap-2">
                                {d.demoIcon}
                                Live Demo
                            </a>
                        </button>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Projects