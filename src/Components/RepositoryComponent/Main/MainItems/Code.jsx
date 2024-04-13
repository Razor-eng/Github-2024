import { GoCopilot } from "react-icons/go"
import Avatar from "../Avatar"
import { IoBulbOutline, IoPersonAddOutline } from "react-icons/io5"
import { MdOutlineInstallDesktop } from "react-icons/md"
import { BsCopy } from "react-icons/bs"

const Code = ({ repo, currentUser }) => {
    return (
        <div className='pt-[24px] px-[130px]'>
            <div className="flex gap-3 items-center border-b border-zinc-300 dark:border-zinc-700 pb-4">
                <Avatar />
                <h2 className="text-xl dark:text-white font-semibold">{repo?.name}</h2>
                <p className="rounded-full text-xs font-semibold text-gray-500 border-slate-800 border w-fit p-1 px-2">{repo?.public ? 'Public' : 'Private'}</p>
            </div>
            <div className="w-full flex gap-10 mt-5">
                <div className="w-full border rounded-md border-zinc-300 dark:border-zinc-700 px-5 py-6">
                    <GoCopilot color="#848D97" size={25} />
                    <h2 className="dark:text-white mt-3 font-semibold">Set up GitHub Copilot</h2>
                    <p className="text-gray-500 text-sm">Use {"GitHub's"} AI pair programmer to autocomplete suggestions as you code.</p>
                    <button className="border mt-3 text-xs border-zinc-300 dark:border-gray-700 font-semibold dark:text-gray-300 p-2 dark:bg-[#21262D] bg-zinc-300 rounded-md hover:opacity-90">Get started with GitHub Copilot</button>
                </div>
                <div className="w-full border rounded-md dark:border-zinc-700 border-zinc-300 p-5">
                    <IoPersonAddOutline color="#848D97" size={25} />
                    <h2 className="dark:text-white mt-3 font-semibold">Add collaborators to this repository</h2>
                    <p className="text-gray-500 text-sm">Search for people using their GitHub username or email address.</p>
                    <button className="border mt-3 text-xs dark:border-gray-700 font-semibold dark:text-gray-300 p-2 dark:bg-[#21262D] bg-zinc-300 rounded-md hover:opacity-90">Inivite collaborators</button>
                </div>
            </div>
            <div className="mt-5 w-full">
                <div className="border dark:border-[#264065] bg-blue-200 border-blue-300 dark:bg-[#121D2F] p-5 w-full rounded-t-md">
                    <h2 className="text-xl dark:text-white">Quick setup — if you’ve done this kind of thing before</h2>
                    <div className="mt-2 flex gap-4 items-center">
                        <button className="hover:opacity-90 bg-zinc-300 dark:bg-[#21262D] dark:hover:bg-[#292E36] hover:bg-zinc-400 flex items-center px-2 py-2 rounded-md w-48 justify-center gap-1 dark:text-gray-200 text-xs font-semibold">
                            <MdOutlineInstallDesktop color="#848D97" size={20} />
                            <p className="text-xs font-semibold dark:text-gray-300">Set up in Desktop</p>
                        </button>
                        <p className="text-sm font-semibold dark:text-white">or</p>
                        <button className="hover:opacity-90 flex items-center rounded-md dark:text-gray-200 text-xs font-semibold">
                            <p className="bg-zinc-200 dark:bg-[#31363E] text-xs font-semibold p-2 rounded-l-md dark:text-gray-300">HTTPS</p>
                            <p className="text-xs font-semibold bg-zinc-300 dark:bg-[#21262D] p-2 rounded-r-md dark:text-gray-300">SSH</p>
                        </button>
                        <div className="w-full bg-zinc-100 dark:bg-[#0D1117] flex items-center border border-[#292E36] pl-2 rounded-md">
                            <input
                                type="text"
                                placeholder={`https://github.com/${currentUser?.name}/${repo?.name}.git`}
                                className="dark:text-zinc-200 bg-transparent outline-none text-xs w-full"
                            />
                            <div className="bg-zinc-300 dark:bg-[#292E36] p-2 cursor-pointer">
                                <BsCopy color="#848D97" size={18} />
                            </div>
                        </div>
                    </div>
                    <p className="text-sm dark:text-zinc-200 mt-2">
                        Get started by <span className="text-[#4493F8] underline">creating a new file</span> or <span className="text-[#4493F8] underline">uploading an existing file.</span> We recommend every repository include a <span className="underline text-[#4493F8]">README</span>, <span className="underline text-[#4493F8]">LICENSE</span>, and <span className="underline text-[#4493F8]">.gitignore</span>.
                    </p>
                </div>
                <div className="border-l border-r dark:border-zinc-700 bg-transparent p-5 w-full">
                    <h2 className="text-xl dark:text-white">…or create a new repository on the command line</h2>
                    <div className="dark:bg-[#161B22] bg-zinc-200 dark:text-white p-2 flex flex-col gap-1 mt-1 relative">
                        <h3 className="tracking-wider text-sm font-semibold">{`echo "# ${repo?.name}" >> README.md`}</h3>
                        <h3 className="tracking-wider text-sm font-semibold">git init</h3>
                        <h3 className="tracking-wider text-sm font-semibold">git add README.md</h3>
                        <h3 className="tracking-wider text-sm font-semibold">{'git commit -m "first commit"'}</h3>
                        <h3 className="tracking-wider text-sm font-semibold">{'git branch -M main'}</h3>
                        <h3 className="tracking-wider text-sm font-semibold">{`git remote add origin https://github.com/${currentUser?.name}/${repo?.name}.git`}</h3>
                        <h3 className="tracking-wider text-sm font-semibold">{'git push -u origin main'}</h3>
                        <div className="bg-zinc-300 dark:bg-[#292E36] w-fit absolute right-0 p-2 cursor-pointer">
                            <BsCopy color="#848D97" size={18} />
                        </div>
                    </div>
                </div>
                <div className="border-l border-t border-r dark:border-zinc-700 bg-transparent p-5 w-full">
                    <h2 className="text-xl dark:text-white">…or push an existing repository from the command line</h2>
                    <div className="bg-zinc-200 dark:bg-[#161B22] dark:text-white p-2 flex flex-col gap-1 mt-1 relative">
                        <h3 className="tracking-wider text-sm font-semibold">{`git remote add origin https://github.com/${currentUser?.name}/${repo?.name}.git`}</h3>
                        <h3 className="tracking-wider text-sm font-semibold">{'git branch -M main'}</h3>
                        <h3 className="tracking-wider text-sm font-semibold">{'git push -u origin main'}</h3>
                        <div className="bg-zinc-300 dark:bg-[#292E36] w-fit absolute right-0 p-2 cursor-pointer">
                            <BsCopy color="#848D97" size={18} />
                        </div>
                    </div>
                </div>
                <div className="border rounded-b-md dark:border-zinc-700 bg-transparent p-5 w-full">
                    <h2 className="text-xl dark:text-white">…or import code from another repository</h2>
                    <p className="text-sm dark:text-gray-200">You can initialize this repository with code from a Subversion, Mercurial, or TFS project.</p>
                    <button className="border mt-3 text-xs dark:border-gray-700 font-semibold dark:text-gray-300 p-2 bg-zinc-300 dark:bg-[#21262D] rounded-md hover:opacity-90">Import code</button>
                </div>
            </div>
            <div className="dark:text-white flex w-full justify-center gap-1 mt-4">
                <IoBulbOutline color="#848D97" size={20} />
                <h2 className="font-bold">ProTip! <span className="text-[#848D97] font-normal">Use the URL for this page when adding GitHub as a remote.</span></h2>
            </div>
        </div>
    )
}

export default Code
