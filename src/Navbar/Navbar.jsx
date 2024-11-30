import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

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

    return (
        <nav className="flex items-center justify-between  px-4 py-2 text-white mb-24">
            <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white">
                <h6 className="text-lg">&lt;<span className="text-white">saif<span className="text-[#25483F]">sultan</span></span>/&gt;</h6>
            </div>
            <ul className="hidden items-center justify-between gap-10 md:flex">
                <li className="group flex   cursor-pointer flex-col">
                    <span className="text-sm font-normal text-[#F3F6F5]">Home</span><span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-white transition-all duration-300 group-hover:w-full"></span>
                </li>
            </ul>
            <div className="flex items-center space-x-4">
                <button className="rounded-lg bg-sky-500 px-3 py-2 text-md text-white duration-300 font-bold active:scale-95">
                    toggle
                </button>
                <button className="rounded-lg  bg-sky-500 px-3 py-2 text-md text-white font-bold  transition-all duration-200 hover:scale-110">
                    Hire me
                </button>
            </div>
            <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                {dropDownState && (
                    <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                        <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                            Home
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            Services
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            About
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            Contact
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar