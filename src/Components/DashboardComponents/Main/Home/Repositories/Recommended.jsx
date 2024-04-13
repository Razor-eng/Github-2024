import { CiStar } from "react-icons/ci"
import { GoDotFill } from "react-icons/go"
import { MdOutlineMoreHoriz } from "react-icons/md"
import { RiArrowDownSFill } from "react-icons/ri"

const Recommended = () => {
    return (
        <div className="w-full h-fit bg-zinc-200 dark:bg-[#0D1117] mt-4 border dark:border-[#30363D] border-[#D0D7DE] rounded-md">
            <div className="border-b border-[#262B32] w-full p-1 sm:p-4 ">
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="text-[#848D97]">
                            <CiStar size={15} />
                        </div>
                        <div className="flex gap-3 items-center">
                            <h3 className="text-[#848D97]">Recommended for you</h3>
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
                        <img src="/public/images/dashboard/home/author.png" alt="" className="w-5 h-5 rounded-full" />
                        <h2 className="text-sm font-semibold dark:text-white">imbhargav5/rooks</h2>
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
                    <p className="dark:text-[#E6EDF3] text-xs sm:text-sm">Essential React custom hooks ⚓ to super charge your components!</p>
                </div>
                <div className="mt-5 flex gap-3">
                    <div className="flex gap-1 items-center">
                        <GoDotFill color="#3572A5" fontSize={20} />
                        <p className="text-[#848D97] text-xs">TypeScript</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <CiStar color="#848D97" fontSize={20} />
                        <p className="text-[#848D97] text-xs">3.1k</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommended