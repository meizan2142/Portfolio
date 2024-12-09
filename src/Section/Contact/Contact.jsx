import RoundaboutRightRoundedIcon from '@mui/icons-material/RoundaboutRightRounded';
const Contact = () => {
    return (
        <div id='contact' className="px-9">
            <h1 className="text-[#DCE3E1] text-2xl font-medium flex items-center gap-3">
                <span className='text-[#3F7D6E]'><RoundaboutRightRoundedIcon /></span>
                Get in Touch
                <span className="rounded-full border border-[#272E2C] py-1 px-2 text-sm text-[#3F7D6E]">main</span>
                <span className='text-[#3F7D6E] text-sm'>/</span>
                <span className="rounded-full border border-[#272E2C] py-1 px-2 text-sm text-[#3F7D6E]">connect</span>
            </h1>
        </div>
    )
}

export default Contact