const Navbar = () => {
    return (
        // <div>
        //     <ul className="flex">
        //         <li>Home</li>
        //         <li>About</li>
        //         <li>Contact</li>
        //         <li>Projects</li>
        //     </ul>    
        // </div>
        <div className="grid grid-cols-4">
            <main className="col-span-3">
                aliquid labore corrupti!
            </main>
            <aside className="self-baseline sticky top-72 h-32 col-span-1 bg-black text-white">
                Sticky Sidebar
            </aside>
        </div>
    );
};

export default Navbar;