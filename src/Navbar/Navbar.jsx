import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
// import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();
    const [scrollPosition, setScrollPosition] = useState(0);
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

    const navLinksLg = <>
        <li className="group flex   cursor-pointer flex-col">
            <span className="text-sm font-medium  text-[#DCE3E1]">Home</span><span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#6D7372] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex   cursor-pointer flex-col">
            <span className="text-sm font-medium  text-[#DCE3E1]">About</span><span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#6D7372] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex   cursor-pointer flex-col">
            <span className="text-sm font-medium  text-[#DCE3E1]">Skills</span><span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#6D7372] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex   cursor-pointer flex-col">
            <span className="text-sm font-medium  text-[#DCE3E1]">Projects</span><span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#6D7372] transition-all duration-300 group-hover:w-full"></span>
        </li>
    </>

    return (
        <nav className={`flex items-center justify-between px-4 py-2 text-white ${scrollPosition > 100 ? 'mx-auto w-[1400px] fixed z-10 border border-[#365E53] rounded-r-full rounded-l-full' : ''}`}
        >
            <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white">
                <h6 className="text-lg text-[#25483F]">&lt;<span className="text-[#DCE3E1]">saif<span className="text-[#25483F]">sultan</span></span>/&gt;</h6>
            </div>
            <ul className="mobile:hidden desktop:flex items-center justify-between gap-10 md:hidden">
                {navLinksLg}
            </ul>
            <div className="flex items-center space-x-4">
                {/* <button className="border p-1 rounded-full border-[#365E53]">
                    <MdOutlineDarkMode size={20} color="#365E53" />
                </button>
                <button className="border p-1 rounded-full border-[#365E53]">
                    <MdOutlineLightMode size={20} color="#365E53" />
                </button> */}
                <button className="rounded-lg  desktop:flex mobile:hidden md:hidden bg-[#365E53] px-3 py-2 text-md text-[#DCE3E1] font-medium text-sm ease-in-out transition-all duration-200 hover:scale-110">
                    Contact me
                </button>
            </div>
            <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform desktop:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                {dropDownState && (
                    <ul className=" z-10  gap-2  border-[#365E53] border p-2  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                        <li className="cursor-pointer  px-6 py-2 text-sm font-medium  text-[#DCE3E1] ">
                            Home
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-sm font-medium  text-[#DCE3E1]">
                            About
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-sm font-medium  text-[#DCE3E1]">
                            Skills
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-sm font-medium  text-[#DCE3E1]">
                            Projects
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-sm font-medium  text-[#DCE3E1]">
                            Contact
                        </li>
                        <button className="rounded-lg   bg-[#365E53] px-1 py-2 text-md text-[#DCE3E1] font-medium text-sm ease-in-out transition-all duration-200 hover:scale-110">
                            Contact me
                        </button>

                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar