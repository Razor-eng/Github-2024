import { useState } from "react";
import { GoCodeSquare, GoCodespaces, GoPeople, GoRepoPush } from "react-icons/go";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { RiPagesLine } from "react-icons/ri";
import { VscServerEnvironment } from "react-icons/vsc";
import { FaRegPlayCircle } from "react-icons/fa";
import { PiWebhooksLogo } from "react-icons/pi";
import { TbPasswordMobilePhone } from "react-icons/tb";
import { IoKeyOutline, IoMailOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaGithubSquare } from "react-icons/lia";
import Heading from "./Settings/Heading";
import General from "./Settings/General";
import SocialPreview from "./Settings/SocialPreview";
import Features from "./Settings/Features";
import PullRequests from "./Settings/PullRequests";
import DangerZone from "./Settings/DangerZone";

const Settings = ({ repo }) => {
    const [active, setActive] = useState(0);
    const Settings = [
        {
            title: 'Access',
            items: [
                { id: 1, name: 'Collaborators', icon: GoPeople },
                { id: 2, name: 'Moderation options', icon: HiOutlineChatAlt2 },
            ]
        },
        {
            title: 'Code and automation',
            items: [
                { id: 3, name: 'RulesCollaborators', icon: GoRepoPush },
                { id: 4, name: 'Actions', icon: FaRegPlayCircle },
                { id: 5, name: 'Webhooks', icon: PiWebhooksLogo },
                { id: 5, name: 'Environments', icon: VscServerEnvironment },
                { id: 7, name: 'Codespaces', icon: GoCodespaces },
                { id: 8, name: 'Pages', icon: RiPagesLine },
            ]
        },
        {
            title: 'Security',
            items: [
                { id: 9, name: 'Code security and analysis', icon: GoCodeSquare },
                { id: 10, name: 'Deploy keys', icon: IoKeyOutline },
                { id: 11, name: 'Secrets and variables', icon: TbPasswordMobilePhone },
            ]
        },
        {
            title: 'Integrations',
            items: [
                { id: 12, name: 'GitHub Apps', icon: LiaGithubSquare },
                { id: 13, name: 'Email notifications', icon: IoMailOutline },
            ]
        }
    ]

    return (
        <div className='pt-[24px] px-[162px] grid grid-cols-4'>
            <div className="col-span-1">
                <div className="pb-2 pl-2">
                    <div
                        className={`${active === 0 ? 'border-l-4 border-[#1F6FEB] dark:bg-[#161B22] bg-zinc-300' : ''} cursor-pointer hover:dark:bg-slate-800 hover:bg-slate-200 rounded-r-md p-2 flex items-center`}
                        onClick={() => setActive(0)}
                    >
                        <h2 className={`text-sm dark:text-zinc-300 flex items-center gap-3 ${active === 0 ? 'font-semibold dark:text-white text-black' : ''}`}>
                            <IoSettingsOutline className={`${active === 0 ? 'font-semibold dark:text-white text-black' : 'dark:text-zinc-400 text-zinc-600'}`} size={18} />
                            General
                        </h2>
                    </div>
                </div>
                {Settings.map((Setting, id) => (
                    <div key={id} className="border-t dark:border-zinc-700 border-zinc-300 p-2 pt-4 pl-3">
                        <h2 className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 px-2 mb-2">{Setting.title}</h2>
                        {Setting.items.map((item, id) => (
                            <div
                                key={id}
                                className={`${active === item.id ? 'border-l-4 border-[#1F6FEB] dark:bg-[#161B22] bg-zinc-300' : ''} cursor-pointer hover:dark:bg-slate-800 hover:bg-slate-200 rounded-r-md p-2 flex items-center`}
                                onClick={() => setActive(item.id)}
                            >
                                <h2 className={`text-sm dark:text-zinc-300 flex items-center gap-3 ${active === item.id ? 'font-semibold dark:text-white text-black' : ''}`}>
                                    <item.icon className={`${active === item.id ? 'font-semibold dark:text-white text-black' : 'dark:text-zinc-400 text-zinc-600'}`} size={18} />
                                    {item.name}
                                </h2>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="ml-4 flex flex-col gap-5 col-span-3 dark:text-zinc-100 text-zinc-900">
                <General repo={repo} />
                <SocialPreview />
                <Features />
                <PullRequests />
                <div>
                    <Heading heading={'Archives'} />
                    <p className="dark:text-white font-light mb-2 mt-5 text-sm">When creating source code archives, you can choose to include files stored using Git LFS in the archive.</p>
                    <div className="p-4 border border-zinc-200 dark:border-zinc-800">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className={`h-3 border-[#262B32] w-4 cursor-pointer appearance-none checked:appearance-auto rounded-sm border transition-all`}
                                />
                                <p className="text-sm font-medium">
                                    Include Git LFS objects in archives
                                </p>
                            </div>
                            <p className="text-xs ml-6 text-[#848D97]">
                                Git LFS usage in archives is billed at the same rate as usage with the client.                    </p>
                        </div>
                    </div>
                </div>
                <div>
                    <Heading heading={'Pushes'} />
                    <div className="p-4 border border-zinc-200 dark:border-zinc-800">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className={`h-3 border-[#262B32] w-4 cursor-pointer appearance-none checked:appearance-auto rounded-sm border transition-all`}
                                />
                                <p className="text-sm font-medium">
                                    Limit how many branches and tags can be updated in a single push
                                    <span className="border text-xs ml-5 border-[#3FB950] text-[#3FB950] px-1 rounded-full">Beta</span>
                                </p>
                            </div>
                            <p className="text-xs ml-6 text-[#848D97]">
                                Pushes will be rejected if they attempt to update more than this.
                                <span className="text-[#4493F8] underline"> Learn more about this setting, </span>
                                and send us your
                                <span className="text-[#4493F8] underline"> feedback</span>
                                .
                            </p>
                        </div>
                    </div>
                </div>
                <DangerZone />
                {/* <button className="dark:bg-[#21262D] gap-1 rounded-lg bg-zinc-200 dark:text-zinc-400 text-zinc-600 px-3 py-1 flex items-center">Period: <span className="dark:text-zinc-300 text-zinc-700 flex items-center">1 week <IoMdArrowDropdown /></span></button> */}
                {/* <div className="mt-4 border border-zinc-300 dark:border-zinc-700 rounded-md">
                    <div className="dark:bg-[#161B22] bg-zinc-200 p-4">
                        <h2 className="dark:text-white font-semibold">Overview</h2>
                    </div>
                    <div className="p-4 border-t border-zinc-300 dark:border-zinc-700 py-6 grid grid-cols-2 gap-8">
                        <h2 className="dark:text-white border-t-8 dark:border-zinc-700 border-zinc-300 rounded-sm pt-2 font-semibold">0 <span className="font-light">Active pull requests</span></h2>
                        <h2 className="dark:text-white border-t-8 dark:border-zinc-700 border-zinc-300 rounded-sm pt-2 font-semibold">0 <span className="font-light">Active issues</span></h2>
                    </div>
                    <div className="border-t border-zinc-300 dark:border-zinc-700 grid grid-cols-4">
                        <div className="border-r dark:border-zinc-700 border-zinc-300 p-6">
                            <div className="dark:text-white font-semibold flex flex-col justify-center items-center">
                                <div className="flex gap-2">
                                    <img src="/images/repository/insights/1.svg" alt="" />0
                                </div>
                                <span className="font-light text-zinc-500">Merged pull requests</span></div>
                        </div>
                        <div className="border-r dark:border-zinc-700 border-zinc-300 p-6">
                            <div className="dark:text-white font-semibold flex flex-col justify-center items-center">
                                <div className="flex gap-2">
                                    <img src="/images/repository/insights/2.svg" alt="" />0
                                </div>
                                <span className="font-light text-zinc-500">Open pull requests</span></div>
                        </div>
                        <div className="border-r dark:border-zinc-700 border-zinc-300 p-6">
                            <div className="dark:text-white font-semibold flex flex-col justify-center items-center">
                                <div className="flex gap-2">
                                    <img src="/images/repository/insights/3.svg" alt="" />0
                                </div>
                                <span className="font-light text-zinc-500">Closed issues</span></div>
                        </div>
                        <div className="p-6">
                            <div className="dark:text-white font-semibold flex flex-col justify-center items-center">
                                <div className="flex gap-2">
                                    <img src="/images/repository/insights/4.svg" alt="" />0
                                </div>
                                <span className="font-light text-zinc-500">New issues</span></div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="mt-10 font-semibold flex justify-center dark:text-white">There hasn’t been any commit activity on {currentUser?.name}/{repo?.name} in the last week.</div> */}
            </div>
        </div>
    )
}

export default Settings