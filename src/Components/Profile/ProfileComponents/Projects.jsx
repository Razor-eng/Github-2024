import { GoProjectSymlink } from "react-icons/go"

const Projects = () => {
    return (
        <div>
            <div className="w-full flex flex-col gap-3 p-8 border rounded-md items-center border-zinc-300 dark:border-zinc-700 pb-14">
                <GoProjectSymlink className="text-zinc-500" size={24} />
                <h2 className="dark:text-white text-xl font-semibold">
                    Create your first GitHub project
                </h2>
                <p className="text-zinc-500">
                    Projects are a customizable, flexible tool for planning and tracking your work.
                </p>
                <button className="flex mt-4 items-center gap-1 border border-zinc-300 dark:border-zinc-700 text-white bg-[#1F883D] px-4 py-2 rounded-md text-sm font-semibold">
                    New project
                </button>
            </div>
        </div>
    )
}

export default Projects