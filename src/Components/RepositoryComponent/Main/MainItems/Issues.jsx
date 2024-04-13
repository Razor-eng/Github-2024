import { BsSearch } from "react-icons/bs"
import { GoMilestone } from "react-icons/go"
import { HiOutlineTag } from "react-icons/hi2"
import { IoBulbOutline } from "react-icons/io5"
import { RiArrowDownSFill } from "react-icons/ri"
import { VscIssues } from "react-icons/vsc"

const Issues = ({ repo }) => {
    return (
        <div className='pt-[24px] px-[150px]'>
            <div className="border rounded-md dark:text-white relative w-full flex p-6 justify-center items-center border-zinc-300 dark:border-zinc-800 flex-col">
                <h2 className="text-lg font-normal">Label issues and pull requests for new contributors</h2>
                <p className="dark:text-gray-300 text-sm">Now, GitHub will help potential first-time contributors <span className="text-[#4493F8] underline">discover issues</span> labeled with <span className="text-[#C1B8FF] border border-[#4F4C7A] rounded-full px-1 text-xs font-semibold bg-[#1F1E41]">good first issue</span></p>
                <p className="text-[#4493F8] absolute right-5 top-5 text-sm cursor-pointer hover:underline">Dismiss</p>
            </div>
            <div className="mt-4 mb-4 w-full">
                <div className="w-full flex">
                    <button className="rounded-l-md bg-zinc-300 dark:bg-[#292E36] text-sm font-semibold dark:text-zinc-200 py-1 px-2 flex items-center gap-2">Filter <RiArrowDownSFill size={18} color="#848D97" /></button>
                    <div className="flex-1 pl-2 rounded-r-md dark:text-gray-500 flex items-center bg-zinc-200 dark:bg-[#161B22] focus-within:border focus-within:border-[#1F6FEB]">
                        <BsSearch />
                        <input
                            type="text"
                            className="bg-transparent text-zinc-200 placeholder-zinc-500 pl-3 outline-none w-full"
                            placeholder="is:issue is:open"
                        />
                    </div>
                    <button className="rounded-l-md ml-7 text-sm font-semibold dark:text-zinc-200 border-2 dark:border-zinc-800 bg-transparent py-1 px-2 flex items-center gap-2"><HiOutlineTag size={18} /> Labels</button>
                    <button className="rounded-r-md text-sm font-semibold dark:text-zinc-200 border-2 dark:border-zinc-800 bg-transparent py-1 px-2 flex items-center gap-2"><GoMilestone size={18} /> Milestones</button>
                    <button className="dark:text-zinc-200 text-sm font-semibold py-1 px-2 bg-[#29903B] hover:opacity-90 ml-4 rounded-md">New issue</button>
                </div>
            </div>
            <div className="border rounded-md w-full dark:text-white flex border-zinc-300 dark:border-zinc-800 justify-center">
                <div className="max-w-[768px] min-h-[320px] py-[40px] px-[80px] flex gap-5 flex-col justify-center items-center">
                    <VscIssues size={30} color="#848D97" />
                    <h2 className="text-2xl font-semibold">Welcome to issues!</h2>
                    <p className="dark:text-[#848D97] text-sm">Issues are used to track todos, bugs, feature requests, and more. As issues are created, they’ll appear here in a searchable and filterable list. To get started, you should <span className="text-[#4493F8] hover:underline">create an issue</span>.</p>
                </div>
            </div>
            <div className="dark:text-white flex w-full justify-center gap-1 mt-4">
                <IoBulbOutline color="#848D97" size={20} />
                <h2 className="font-bold">ProTip! <span className="text-[#848D97] font-normal">What’s not been updated in a month:</span> <span className="text-[#1F6FEB] underline">{`updated:<${repo?.timeStamp}`}</span>.</h2>
            </div>
        </div >
    )
}

export default Issues