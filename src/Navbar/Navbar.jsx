import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import AOS from 'aos';
const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();
    const [scrollPosition, setScrollPosition] = useState(0);
    const navLinksLg = [
        {
            id: '1',
            path: '/#home',
            pathName: 'Home'
        },
        {
            id: '2',
            path: '/#about',
            pathName: 'About'
        },
        {
            id: '3',
            path: '/#skills',
            pathName: 'Skills'
        },
        {
            id: '4',
            path: '/#projects',
            pathName: 'Projects'
        },
    ]
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);

    return (
        <nav
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className={`flex items-center justify-between px-4 py-2 text-white ${scrollPosition > 50 ? 'mx-auto bg-[#0E1714] mt-4 mobile:w-full desktop:w-[1400px] md:w-full fixed z-10 border border-[#272E2C] rounded-r-full rounded-l-full' : ''}`}
        >
            <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white">
                <h6 className="text-lg text-[#25483F]">&lt;<span className="text-[#f3f6f5b3]">saif<span className="text-[#25483F]">sultan</span></span>/&gt;</h6>
            </div>
            <ul className="mobile:hidden desktop:flex lg:flex laptopL:flex items-center justify-between gap-10 md:flex">
                {navLinksLg.map(navLink => (
                    <li key={navLink.id}>
                        <a href={navLink.path} className="group flex text-[#f3f6f5b3] cursor-pointer flex-col font-normal text-sm">
                            {navLink.pathName}<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#f3f6f5b3] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex items-center space-x-4">
                <button className="rounded-lg  desktop:flex lg:flex laptopL:flex mobile:hidden md:flex bg-[#365E53] px-3 py-2 text-[#DCE3E1] font-medium text-sm ease-in-out transition-all duration-200 hover:scale-110">
                    <a href="/#contact">Contact me</a>
                </button>
            </div>
            <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform desktop:hidden md:hidden lg:hidden laptopL:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                {dropDownState && (
                    <ul className=" z-10  gap-2 bg-[#0E1714] border-[#272E2C] border p-2  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                        <li className="cursor-pointer  px-6 py-2 text-sm font-medium  text-[#DCE3E1] ">
                            <a href="/#home">Home</a>
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-sm font-medium  text-[#DCE3E1]">
                            <a href="/#about">About</a>
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-sm font-medium  text-[#DCE3E1]">
                            <a href="/#skills">Skills</a>
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-sm font-medium  text-[#DCE3E1]">
                            <a href="/#projects">Projects</a>
                        </li>
                        <button className="rounded-lg   bg-[#365E53] px-1 py-2 text-md text-[#DCE3E1] font-medium text-sm ease-in-out transition-all duration-200 hover:scale-110">
                            <a href="/#contact">Contact</a>
                        </button>

                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar