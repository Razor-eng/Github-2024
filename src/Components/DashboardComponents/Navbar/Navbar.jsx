import { useContext } from "react"
import { ThemeContext } from "../../../Context/ThemeContext/ThemeContext";
import { IoAdd, IoGitPullRequestOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { VscIssues } from "react-icons/vsc";
import { PiNotificationBold } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import Avatar from "../Avatar/Avatar";

const Navbar = ({ setOpen, currentUser, setProfile }) => {
    const { theme, setTheme } = useContext(ThemeContext);
    const location = useLocation();

    return (
        <div className="w-full flex justify-between items-center dark:bg-[#010409] bg-zinc-100 h-16 border-b dark:border-[#30363D] border-[#D0D7DE]">
            <div className="flex p-4 gap-2 items-center">
                <button
                    type='button'
                    onClick={() => {
                        setOpen(true);
                    }}
                    className='cursor-pointer border dark:border-[#30363D] border-[#D0D7DE] p-2 rounded-md h-8'
                >
                    <div className="w-[15px] h-[2px] transition ease-in duration-150  bg-[#636C76] rotate-0 mb-1"></div>
                    <div className="w-[15px] h-[2px] transition ease-in duration-150 bg-[#636C76] mb-1"></div>
                    <div className="w-[15px] h-[2px] transition ease-in duration-150 bg-[#636C76]  rotate-0"></div>
                </button>
                <div className="ml-2 cursor-pointer">
                    {theme === "light" ?
                        <div
                            onClick={() => { setTheme('dark'); localStorage.setItem('theme', 'dark') }}
                        >
                            <svg height="32" aria-hidden="true" fill='black' viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className=" text-white">
                                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                            </svg>
                        </div>
                        :
                        <div
                            onClick={() => { setTheme('light'); localStorage.setItem('theme', 'light') }}
                        >
                            <svg height="32" aria-hidden="true" fill='white' viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className=" text-white">
                                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                            </svg>
                        </div>
                    }
                </div>
                <h2 className="dark:text-white text-sm font-semibold cursor-pointer dark:hover:bg-[#171B20] hover:bg-[#EFF1F4] p-2 rounded-md">
                    {location.pathname === '/new' ?
                        'New repository'
                        :
                        'Dashboard'
                    }
                </h2>
            </div>
            <div className="p-4 flex items-center">
                <div className='lg:flex items-center max-lg:flex-col lg:px-0 px-3 mb-3 lg:mb-0 text-left lg:space-x-4'>
                    <div className='lg:flex mb-2 lg:mb-0 relative max-lg:mr-4'>
                        <input
                            placeholder='Search...'
                            className='bg-transparent max-lg:w-full w-[320px] lg:px-2 h-[38px] max-lg:h-[41px] p-[3.5px] whitespace-nowrap overflow-hidden placeholder:text-[14px] max-lg:placeholder:text-[16px] font-medium placeholder:pl-2 focus:z-10 text-[14px] focus:outline-none focus:bg-slate-100 focus:text-black border border-[#30363D] rounded-md'
                            type='text'
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" aria-hidden="true" className="mr-1 absolute right-0 top-[10px] max-lg:hidden"><path fill="none" stroke="#979A9C" opacity=".4" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"></path><path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path></svg>
                    </div>
                </div>
                <div className="border dark:border-[#30363D] border-[#D0D7DE] ml-4 mr-4 h-10">
                </div>
                <div className="flex gap-2">
                    <button className="flex border rounded-lg gap-1 items-center px-2 py-1 border-[#30363D] hover:bg-[#171B20]">
                        <IoAdd color="#646B74" size={22} />
                        <IoMdArrowDropdown color="#646B74" size={20} />
                    </button>
                    <button className="flex border rounded-lg gap-1 items-center px-2 py-1 border-[#30363D] hover:bg-[#171B20]">
                        <VscIssues color="#646B74" size={22} />
                    </button>
                    <button className="flex border rounded-lg gap-1 items-center px-2 py-1 border-[#30363D] hover:bg-[#171B20]">
                        <IoGitPullRequestOutline color="#646B74" size={22} />
                    </button>
                    <button className="flex border rounded-lg gap-1 items-center px-2 py-1 border-[#30363D] hover:bg-[#171B20]">
                        <PiNotificationBold color="#646B74" size={22} />
                    </button>
                    <div onClick={() => setProfile(true)}>
                        <Avatar photo={currentUser?.photo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar