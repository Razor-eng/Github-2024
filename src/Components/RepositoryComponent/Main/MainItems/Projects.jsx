import { BsSearch } from "react-icons/bs"
import { MdArrowDropDown } from "react-icons/md"
import { GoProjectSymlink } from "react-icons/go"

const Projects = () => {
    return (
        <div className='pt-[24px] px-[150px]'>
            <div className="border rounded-md gap-2 dark:text-white relative w-full flex p-6 justify-start border-zinc-300 dark:border-zinc-800 flex-col">
                <h2 className="text-2xl font-semibold">Welcome to the all-new projects</h2>
                <p className="dark:text-gray-300 w-[600px] text-sm">Built like a spreadsheet, project tables give you a live canvas to filter, sort, and group issues and pull requests. Tailor them to your needs with custom fields and saved views.</p>
                <button className="border border-zinc-400 dark:border-zinc-600 bg-zinc-300 w-fit dark:bg-zinc-700 py-1 rounded-md px-3">Learn more</button>
            </div>
            <div className="mt-4 mb-4 w-full">
                <div className="w-full flex">
                    <div className="flex-1 pl-2 rounded-r-md dark:text-gray-500 flex items-center bg-zinc-200 dark:bg-[#161B22] focus-within:border focus-within:border-[#1F6FEB]">
                        <BsSearch />
                        <input
                            type="text"
                            className="bg-transparent text-zinc-200 placeholder-zinc-500 pl-3 outline-none w-full"
                            placeholder="is:open"
                        />
                    </div>
                    <button className="dark:text-zinc-200 text-sm font-semibold py-1 px-2 bg-[#29903B] hover:opacity-90 ml-4 rounded-md flex items-center gap-1">Link a project <MdArrowDropDown size={20} /></button>
                </div>
            </div>
            <div className="border rounded-md w-full dark:text-white flex border-zinc-300 dark:border-zinc-800 justify-center">
                <div className="max-w-[768px] py-[40px] px-[80px] flex gap-4 flex-col justify-center items-center">
                    <GoProjectSymlink size={30} color="#848D97" />
                    <h2 className="text-2xl font-semibold">Provide quick access to relevant projects.</h2>
                    <p className="dark:text-[#848D97]">Add projects to view them here.</p>
                </div>
            </div>
        </div >
    )
}

export default Projects