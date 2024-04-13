import { FaRegSmile } from "react-icons/fa";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { IoThumbsUp } from "react-icons/io5";

const Released = () => {
    return (
        <div className="w-full h-fit bg-zinc-200 dark:bg-[#0D1117] p-1 sm:p-4 mt-3 border dark:border-[#30363D] border-[#D0D7DE] rounded-md">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <div className="w-fit bg-[#26292F] p-1">
                        <img src="/images/dashboard/home/alan-ai.png" className="w-8 h-8" alt="" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <h3 className="dark:text-white">alan-ai/alan-sdk-ios</h3>
                            <p className="text-[#848D97] text-sm">released</p>
                        </div>
                        <p className="text-[#848D97] text-xs">2 months ago</p>
                    </div>
                </div>
                <div className="hidden sm:block">
                    <button>
                        <MdOutlineMoreHoriz color="#848D97" fontSize={24} />
                    </button>
                </div>
            </div>
            <h2 className="text-lg sm:text-xl mt-3 font-semibold dark:text-white">Alan iOS SDK v3.12.0</h2>
            <div className="dark:bg-[#161B22] w-full mt-2 p-4 sm:px-6">
                <li className="dark:text-[#E6EDF3] text-xs sm:text-sm">Fixed issue with UIGraphicsBeginImageContextWithOptions</li>
            </div>
            <div className="mt-5 flex gap-1">
                <div className="border cursor-pointer w-fit p-1 rounded-full bg-[#161B22] dark:border-[#30363D] border-[#D0D7DE]">
                    <FaRegSmile color="#848D97" fontSize={20} />
                </div>
                <div className="border flex cursor-pointer w-fit p-1 rounded-full dark:border-[#30363D] border-[#D0D7DE] items-center gap-2 px-2">
                    <IoThumbsUp color="#FFC83D" fontSize={16} />
                    <p className="text-xs text-[#848D97]">2</p>
                </div>
            </div>
        </div>
    )
}

export default Released