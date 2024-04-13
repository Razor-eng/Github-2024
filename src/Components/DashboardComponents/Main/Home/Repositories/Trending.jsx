import { MdOutlineMoreHoriz } from "react-icons/md"
import { BsGraphUp } from "react-icons/bs";
import { LuDot } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { RiArrowDownSFill } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";

const Trending = () => {
    return (
        <div className="w-full h-fit dark:bg-[#0D1117] mt-4 border dark:border-[#30363D] border-[#D0D7DE] bg-zinc-200 rounded-md">
            <div className="border-b border-[#262B32] w-full p-1 sm:p-4 ">
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="text-[#848D97]">
                            <BsGraphUp size={15} />
                        </div>
                        <div className="flex gap-3 items-center">
                            <h3 className="text-[#848D97]">Trending Repositories</h3>
                            <LuDot className="dark:text-white text-black" />
                            <p className="text-[#4493F8] cursor-pointer hover:underline text-sm">See more</p>
                        </div>
                    </div>
                    <div className="hidden sm:block">
                        <button>
                            <MdOutlineMoreHoriz color="#848D97" fontSize={24} />
                        </button>
                    </div>
                </div>
                <div className="flex items-center mt-3 justify-between">
                    <div className="flex gap-2">
                        <img src="/public/images/dashboard/home/pku.jpeg" alt="" className="w-5 h-5 rounded-sm" />
                        <h2 className="text-sm font-semibold dark:text-white">PKU-YuanGroup/Open-Sora-Plan</h2>
                    </div>
                    <button className="bg-zinc-300 dark:bg-[#21262D] px-2 rounded-md flex items-center hover:opacity-90">
                        <div className="flex gap-2 items-center p-1 pr-2 border-r dark:border-[#30363D] border-[#D0D7DE]">
                            <CiStar size={20} color="#848D97" />
                            <p className="text-sm font-semibold dark:text-zinc-300">Star</p>
                        </div>
                        <RiArrowDownSFill size={20} color="#848D97" />
                    </button>
                </div>
                <div className="max-w-[550px] mt-1">
                    <p className="dark:text-[#E6EDF3] text-xs sm:text-sm">This project aim to reproduce Sora (Open AI T2V model), we wish the open source community contribute to this project.</p>
                </div>
                <div className="mt-5 flex gap-3">
                    <div className="flex gap-1 items-center">
                        <GoDotFill color="#3572A5" fontSize={20} />
                        <p className="text-[#848D97] text-xs">Python</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <CiStar color="#848D97" fontSize={20} />
                        <p className="text-[#848D97] text-xs">9.6k</p>
                    </div>
                </div>
            </div>
            <div className="w-full p-1 sm:p-4 ">
                <div className="flex items-center mt-3 justify-between">
                    <div className="flex gap-2">
                        <img src="/public/images/dashboard/home/nashu.jpeg" alt="" className="w-5 h-5 rounded-full" />
                        <h2 className="text-sm font-semibold dark:text-white">nashu/FreeAskInternet</h2>
                    </div>
                    <button className="bg-zinc-300 dark:bg-[#21262D] px-2 rounded-md flex items-center hover:opacity-90">
                        <div className="flex gap-2 items-center p-1 pr-2 border-r dark:border-[#30363D] border-[#D0D7DE]">
                            <CiStar size={20} color="#848D97" />
                            <p className="text-sm font-semibold dark:text-zinc-300">Star</p>
                        </div>
                        <RiArrowDownSFill size={20} color="#848D97" />
                    </button>
                </div>
                <div className="max-w-[550px] mt-1">
                    <p className="dark:text-[#E6EDF3] text-xs sm:text-sm">FreeAskInternet is a completely free, private and locally running search aggregator & answer generate using LLM, without GPU needed. The user can ask a question and the system will make a multi eng…</p>
                </div>
                <div className="mt-5 flex gap-3">
                    <div className="flex gap-1 items-center">
                        <GoDotFill color="#3572A5" fontSize={20} />
                        <p className="text-[#848D97] text-xs">Python</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <CiStar color="#848D97" fontSize={20} />
                        <p className="text-[#848D97] text-xs">4.8k</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending