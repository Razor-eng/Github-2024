import { HiOutlineBookOpen } from "react-icons/hi2";

const Wiki = () => {
    return (
        <div className='pt-[24px] px-[150px]'>
            <div className="w-full dark:text-white flex justify-center">
                <div className="min-w-[768px] py-[40px] px-[80px] flex gap-3 flex-col justify-center items-center">
                    <HiOutlineBookOpen size={30} color="#848D97" />
                    <h2 className="text-2xl font-semibold">Welcome to the Github wiki!</h2>
                    <p className="dark:text-[#848D97]">Wikis provide a place in your repository to lay out the roadmap of your project, show the current status, and document software better, together.</p>
                    <button className="text-sm font-semibold bg-[#238636] py-2 px-3 rounded-md mt-4">Create the first page</button>
                </div>
            </div>
        </div >
    )
}

export default Wiki