import { GoRepo } from "react-icons/go";
import { IoMdArrowDropdown, IoMdStarOutline } from "react-icons/io";

const Repositories = ({ repos }) => {
    return (
        <div>
            <div className="w-full flex gap-3 border-b border-zinc-300 dark:border-zinc-700 pb-4">
                <div className="w-full p-1 border border-zinc-300 dark:border-zinc-700 rounded-md pl-4 outline-none focus-within:outline focus-within:border-none focus-within:outline-[#0969DA]">
                    <input
                        type="text"
                        placeholder="Find a repository"
                        className="border-none outline-none bg-transparent w-full h-full"
                    />
                </div>
                <button className="flex items-center gap-1 border border-zinc-300 dark:border-zinc-700 dark:text-white dark:bg-zinc-900 bg-zinc-100 px-3 py-1 rounded-md text-sm font-semibold">
                    Type
                    <IoMdArrowDropdown />
                </button>
                <button className="flex items-center gap-1 border border-zinc-300 dark:border-zinc-700 dark:text-white dark:bg-zinc-900 bg-zinc-100 px-3 py-1 rounded-md text-sm font-semibold">
                    Language
                    <IoMdArrowDropdown />
                </button>
                <button className="flex items-center gap-1 border border-zinc-300 dark:border-zinc-700 dark:text-white dark:bg-zinc-900 bg-zinc-100 px-3 py-1 rounded-md text-sm font-semibold">
                    Sort
                    <IoMdArrowDropdown />
                </button>
                <button className="flex items-center gap-1 border border-zinc-300 dark:border-zinc-700 text-white bg-[#1F883D] px-3 py-1 rounded-md text-sm font-semibold">
                    <GoRepo />
                    New
                </button>
            </div>
            <div className="mt-2">
                {repos.map((repo, id) => (
                    <div className="w-full flex gap-3 border-b border-zinc-300 dark:border-zinc-700 py-8" key={id}>
                        <div className="flex justify-between w-full">
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-3 items-center">
                                    <h2 className="font-semibold text-[#0969DA] text-xl hover:underline">{repo?.name}</h2>
                                    <p className="text-xs border border-zinc-300 dark:border-zinc-700 rounded-full flex items-center justify-center px-2 h-fit font-semibold text-zinc-500">{repo.public ? 'Public' : 'Private'}</p>
                                </div>
                                <p className="text-xs font-normal text-zinc-700 dark:text-zinc-300">Created on {repo?.timeStamp}</p>
                            </div>
                            <button className="flex items-center justify-between gap-1 border border-zinc-300 dark:border-zinc-700 dark:text-zinc-300 dark:bg-zinc-900 bg-zinc-100 h-fit px-3 py-1 rounded-md text-xs font-semibold text-zinc-700">
                                <div className="flex gap-1 items-center pr-2">
                                    <IoMdStarOutline size={18} />
                                    Star
                                </div>
                                <IoMdArrowDropdown size={24} className="pl-1 border-l border-zinc-300 dark:border-zinc-700" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Repositories