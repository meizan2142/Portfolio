import HomeSection from "../Section/Home/HomeSection"

const MainLayout = () => {
    // #0E1714  className="w-[1400px] mx-auto"
    return (
        <div className="bg-[#0E1714] min-h-screen ">
            <div  className="desktop:w-[1400px] desktop:mx-auto">
                <HomeSection/>
            </div>
        </div>
    )
}

export default MainLayout