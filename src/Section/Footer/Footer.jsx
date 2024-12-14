const Footer = () => {
    return (
        <footer className="flex flex-col space-y-8 px-4 md:space-y-12 md:px-9">
            <div className="flex flex-col items-center justify-around gap-5 md:flex-row md:gap-0">
                <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white">
                    <a href="/#home">
                        <h6 className="text-lg text-[#25483F]">
                            &lt;
                            <span className="text-[#f3f6f5b3]">
                                saif<span className="text-[#25483F]">sultan</span>
                            </span>
                            /&gt;
                        </h6>
                    </a>
                </div>
                <nav className="text-lg">
                    <ul className="flex flex-wrap items-center justify-center gap-5 md:flex-nowrap">
                        <li>
                            <a
                                href="/#home"
                                className="group flex cursor-pointer flex-col font-normal text-sm text-[#f3f6f5b3]"
                            >
                                Home
                                <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#f3f6f5b3] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#about"
                                className="group flex cursor-pointer flex-col font-normal text-sm text-[#f3f6f5b3]"
                            >
                                About
                                <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#f3f6f5b3] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#skills"
                                className="group flex cursor-pointer flex-col font-normal text-sm text-[#f3f6f5b3]"
                            >
                                Skills
                                <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#f3f6f5b3] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#projects"
                                className="group flex cursor-pointer flex-col font-normal text-sm text-[#f3f6f5b3]"
                            >
                                Projects
                                <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#f3f6f5b3] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <aside className="flex flex-col items-center gap-2 py-5 text-center text-sm font-normal text-[#f3f6f5b3] md:flex-row md:justify-between">
                <p>
                    <span className="text-[#3F7D6E]">&lt;/&gt; </span>Design & Development by{" "}
                    <span className="text-[#3F7D6E]">Saif Sultan Mizan</span>
                </p>
                <p>
                    <span className="text-[#3F7D6E]">&copy; 2024 </span>All Rights Reserved.
                </p>
            </aside>
        </footer>

    )
}

export default Footer