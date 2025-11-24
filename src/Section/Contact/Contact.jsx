import RoundaboutRightRoundedIcon from '@mui/icons-material/RoundaboutRightRounded';
import { BiLogoGmail } from 'react-icons/bi';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa6';
const Contact = () => {
    return (
        <div id='contact'
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="px-9">
            <h1 className="text-[#DCE3E1] text-2xl font-medium flex items-center gap-3">
                <span className='text-[#3F7D6E]'><RoundaboutRightRoundedIcon /></span>
                Get in Touch
                <span className="rounded-full border border-[#272E2C] py-1 px-2 text-sm text-[#3F7D6E]">main</span>
                <span className='text-[#3F7D6E] text-sm'>/</span>
                <span className="rounded-full border border-[#272E2C] py-1 px-2 text-sm text-[#3F7D6E]">connect</span>
            </h1>
            <div className="text-white py-16 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side */}
                    <div className="border border-[#272E2C] p-4 rounded-md">
                        <h2 className="text-lg text-[#3F7D6E] font-bold mb-4">
                            <span>&lt;</span>
                            <span>/</span>
                            <span>&gt;</span>
                            Let&apos;s Connect
                        </h2>
                        <p className="mb-4 text-[#f3f6f5b3]">
                            Interested in working together or discussing opportunities? You can email me or reach out through any of the platforms below.
                            {/* <a
                                href="mailto:saifsultanmizan21@gmail.com"
                                className="text-[#365E53] hover:text-[#3F7D6E]"
                            >
                                <span> saifsultanmizan21@gmail.com</span>
                            </a> */}
                        </p>
                        <div className="space-y-4">
                            <div className="border border-[#272E2C] rounded-md">
                                <a
                                    href="https://github.com/meizan2142"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-4 py-2 rounded hover:bg-[#0F1915] transition duration-200"
                                >
                                    <span className="flex items-center gap-3">
                                        <BiLogoGmail size={30} color="#365E53" />
                                        <span className="text-sm font-normal text-[#365E53]">
                                            Drop me an Email
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="border border-[#272E2C] rounded-md">
                                <a
                                    href="https://github.com/meizan2142"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-4 py-2 rounded hover:bg-[#0F1915] transition duration-200"
                                >
                                    <span className="flex items-center gap-3">
                                        <FaGithub size={30} color="#365E53" />
                                        <span className="text-sm font-normal text-[#365E53]">
                                            Follow my work on GitHub
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="border border-[#272E2C] rounded-md">
                                <a
                                    href="https://www.linkedin.com/in/saif-mizan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-4 py-2 rounded hover:bg-[#0F1915] transition duration-200"
                                >
                                    <span className="flex items-center gap-3">
                                        <FaLinkedin size={30} color="#365E53" />
                                        <span className="text-sm font-normal text-[#365E53]">
                                            Let’s connect on LinkedIn
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="border border-[#272E2C] rounded-md">
                                <a
                                    href="https://www.facebook.com/share/1CPpDG1AJq"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-4 py-2 rounded hover:bg-[#0F1915] transition duration-200"
                                >
                                    <span className="flex items-center gap-3">
                                        <FaFacebookF size={30} color="#365E53" />
                                        <span className="text-sm font-normal text-[#365E53]">
                                            Join me on Facebook
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div>
                        <form
                            className="space-y-4 border border-[#272E2C] p-4 rounded-md w-full"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-[#3F7D6E] text-sm font-normal"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border text-sm font-normal text-[#365E53] border-[#272E2C] bg-[#121C1A] rounded-md outline-none"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-normal text-[#3F7D6E]"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 text-sm font-normal text-[#365E53] border border-[#272E2C] bg-[#121C1A] rounded-md outline-none"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-sm font-normal text-[#3F7D6E]"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full text-sm font-normal text-[#365E53] px-4 py-2 border border-[#272E2C] bg-[#121C1A] rounded-md outline-none"
                                    rows="4"
                                    placeholder="What's on your mind? Have an idea or project to discuss?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#365E53] px-4 py-2 rounded-lg text-[#DCE3E1] font-medium text-sm transition duration-200 w-full hover:scale-110"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact