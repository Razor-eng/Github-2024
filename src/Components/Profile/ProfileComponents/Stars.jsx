import { GoSearch, GoStar } from "react-icons/go"
import { IoMdArrowDropdown } from "react-icons/io"

const Stars = () => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between w-full items-center">
                <p className="text-xl font-light dark:text-white">Lists (0)</p>
                <div className="flex gap-3">
                    <button className="border text-zinc-800 dark:text-zinc-200 font-semibold flex items-center px-4 rounded-md py-1 border-zinc-300 dark:border-zinc-700">
                        Sort
                        <IoMdArrowDropdown />
                    </button>
                    <button className="border text-zinc-200 font-semibold flex items-center bg-[#1F883D] px-4 rounded-md py-1 border-zinc-300 dark:border-zinc-700">
                        Create list
                    </button>
                </div>
            </div>
            <div className="rounded-md mt-4 border border-zinc-300 dark:border-zinc-700 p-10 pb-20 flex flex-col items-center gap-2">
                <GoStar className="text-zinc-500" size={30} />
                <h2 className="text-xl font-semibold dark:text-white">Create your first list</h2>
                <p className="text-zinc-500 text-sm">
                    Lists make it easier to organize and curate repositories that you have starred.
                    <span className="text-[#0969DA] hover:underline cursor-pointer"> Create your first list</span>
                    .
                </p>
            </div>
            <div className="mt-4 flex text-xs items-center gap-2">
                <p className="border border-[#1A7F37] text-[#1A7F37] rounded-full h-fit px-2">Beta</p>
                <p className="text-zinc-500">Lists are currently in beta.</p>
                <p className="text-[#0969DA] cursor-pointer hover:underline">Share feedback and report bugs.</p>
            </div>
            <div className="flex flex-col mt-8">
                <p className="text-xl font-light dark:text-white">Stars</p>
                <div className="flex items-center justify-between mt-3">
                    <div className="flex gap-3">
                        <div className="w-80 border border-zinc-300 dark:border-zinc-700 outline-none focus-within:outline focus-within:border-none focus-within:outline-[#0969DA] flex items-center px-2 rounded-md">
                            <GoSearch className="text-zinc-700 dark:text-zinc-300" />
                            <input
                                type="text"
                                placeholder="Search stars"
                                className="px-2 border-none outline-none w-full h-full bg-transparent"
                            />
                        </div>
                        <button className="border text-zinc-800 dark:text-zinc-200 font-semibold flex items-center px-4 rounded-md py-1 border-zinc-300 dark:border-zinc-700">
                            Search
                        </button>
                    </div>
                    <div className="flex gap-3">
                        <button className="border text-zinc-800 dark:text-zinc-200 font-semibold flex items-center px-4 rounded-md py-1 border-zinc-300 dark:border-zinc-700">
                            Type: All
                            <IoMdArrowDropdown />
                        </button>
                        <button className="border text-zinc-800 dark:text-zinc-200 font-semibold flex items-center px-4 rounded-md py-1 border-zinc-300 dark:border-zinc-700">
                            Sort by: Recently starred
                            <IoMdArrowDropdown />
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-4 p-10 flex flex-col items-center gap-2">
                <GoStar className="text-zinc-500" size={30} />
                <h2 className="text-xl font-semibold dark:text-white">You don’t have any starred repositories yet.</h2>
                <p className="text-zinc-500">
                    As you{' '}
                    <span className="text-[#0969DA] underline cursor-pointer">explore GitHub,</span>
                    {' '}star repositories to save them for later and they’ll show up here.
                </p>
            </div>
        </div>
    )
}

export default Stars