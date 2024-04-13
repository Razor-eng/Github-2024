import { CiStar } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Widget = () => {
    return (
        <div className="w-[340px] flex flex-col gap-3 mt-4">
            <div className="bg-zinc-200 dark:bg-[#0D1117] p-3 flex flex-col gap-3 border dark:border-[#30363D] border-[#D0D7DE] rounded-md">
                <h3 className="text-sm dark:text-white font-semibold">Lstest Changes</h3>
                <div>
                    <li className="text-xs text-[#848D97]">Yesterday</li>
                    <h3 className="text-sm dark:text-white ml-4">CodeQL 2.17.0: Support for Java 22, Swift 5.10, TS 5.4, C# 12</h3>
                </div>
                <div>
                    <li className="text-xs text-[#848D97]">2 days ago</li>
                    <h3 className="text-sm dark:text-white ml-4">GitHub-hosted runner images deprecation notice: Docker Compose v1</h3>
                </div>
                <div>
                    <li className="text-xs text-[#848D97]">2 days ago</li>
                    <h3 className="text-sm dark:text-white ml-4">CodeQL threat model settings are now available for C# (beta)</h3>
                </div>
                <div className="text-xs text-[#848D97] ml-4 flex items-center gap-1 hover:text-[#4493F8] hover:underline cursor-pointer">
                    View changelog
                    <FaLongArrowAltRight size={12} />
                </div>
            </div>
            <div className="bg-zinc-200 dark:bg-[#0D1117] p-3 flex flex-col gap-3 border dark:border-[#30363D] border-[#D0D7DE] rounded-md">
                <h3 className="text-sm dark:text-white font-semibold">Explore repositories</h3>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src="/images/dashboard/home/avatar1.jpeg" alt="" className="rounded-full w-5 h-5" />
                            <h2 className="text-sm font-semibold dark:text-white"> amrlabib / react-timer-hook</h2>
                        </div>
                        <div className="bg-zinc-300 dark:bg-[#21262D] hover:opacity-80 cursor-pointer px-2 py-1">
                            <CiStar color="#848D97" size={18} />
                        </div>
                    </div>
                    <p className="text-xs text-[#848D97]">React timer hook</p>
                    <div className="flex gap-3">
                        <div className="flex items-center gap-1">
                            <CiStar color="#848D97" fontSize={20} />
                            <p className="text-[#848D97] text-xs">479</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <GoDotFill color="#F1E05A" fontSize={20} />
                            <p className="text-[#848D97] text-xs">JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src="/images/dashboard/home/avatar2.jpeg" alt="" className="rounded-full w-5 h-5" />
                            <h2 className="text-sm font-semibold dark:text-white"> bogdanpetru / react-masonry</h2>
                        </div>
                        <div className="bg-zinc-300 dark:bg-[#21262D] hover:opacity-80 cursor-pointer px-2 py-1">
                            <CiStar color="#848D97" size={18} />
                        </div>
                    </div>
                    <p className="text-xs text-[#848D97]">React layout library inspired by Masonry.</p>
                    <div className="flex gap-3">
                        <div className="flex items-center gap-1">
                            <CiStar color="#848D97" fontSize={20} />
                            <p className="text-[#848D97] text-xs">26</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <GoDotFill color="#3178C6" fontSize={20} />
                            <p className="text-[#848D97] text-xs">JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src="/images/dashboard/home/avatar3.png" alt="" className="rounded-full w-5 h-5" />
                            <h2 className="text-sm font-semibold dark:text-white"> heyitsarpit / react-hooks-library</h2>
                        </div>
                        <div className="bg-zinc-300 dark:bg-[#21262D] hover:opacity-80 cursor-pointer px-2 py-1">
                            <CiStar color="#848D97" size={18} />
                        </div>
                    </div>
                    <p className="text-xs text-[#848D97]">A collection of hooks and utilities for modern React</p>
                    <div className="flex gap-3">
                        <div className="flex items-center gap-1">
                            <CiStar color="#848D97" fontSize={20} />
                            <p className="text-[#848D97] text-xs">357</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <GoDotFill color="#3178C6" fontSize={20} />
                            <p className="text-[#848D97] text-xs">JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className="text-xs text-[#848D97] flex items-center gap-1 hover:text-[#4493F8] mt-2 hover:underline cursor-pointer">
                    Explore More
                    <FaLongArrowAltRight size={12} />
                </div>
            </div>
        </div>
    )
}

export default Widget
