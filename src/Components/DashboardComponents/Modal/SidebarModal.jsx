import { IoCloseOutline } from "react-icons/io5";
import { VscIssues } from "react-icons/vsc";
import { AiOutlineGift, AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { IoGitPullRequest } from "react-icons/io5";
import { GoCodespaces, GoCommentDiscussion, GoProjectSymlink } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { getUserRepos } from "../../../Api/FirestoreApi";
import Avatar from "../Main/Sidebar/Avatar";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../Context/ThemeContext/ThemeContext";

const SidebarModal = ({ open, setOpen, currentUser }) => {
    const items = [
        {
            icon: AiOutlineHome,
            title: 'Home',
            href: '/dashboard'
        },
        {
            icon: VscIssues,
            title: 'Issues'
        },
        {
            icon: IoGitPullRequest,
            title: 'Pull requests'
        },
        {
            icon: GoProjectSymlink,
            title: 'Projects'
        },
        {
            icon: GoCommentDiscussion,
            title: 'Discussions'
        },
        {
            icon: GoCodespaces,
            title: 'Codespaces'
        },
        {
            icon: MdOutlineExplore,
            title: 'Explore'
        },
        {
            icon: AiOutlineGift,
            title: 'Marketplace'
        },
    ]
    const [repos, setRepos] = useState([]);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        currentUser && getUserRepos(setRepos, currentUser?.email)
    }, [currentUser])

    return (
        <div className={`w-screen h-screen absolute top-0 bg-slate-800 bg-opacity-30 ${open ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
            <div className="w-[320px] h-full bg-zinc-200 dark:bg-[#161B22] p-4">
                <div className="flex justify-between">
                    <svg height="32" aria-hidden="true" fill={theme === 'dark' ? 'white' : 'black'} viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg>
                    <button
                        className="hover:bg-zinc-300 dark:hover:bg-[#292E36] text-[#7F8791] hover:text-zinc-600 dark:hover:text-[#E6EDF3] text-xl p-1 rounded-md bg-transparent transition-all duration-200 ease-in-out"
                        onClick={() => setOpen(false)}
                    >
                        <IoCloseOutline />
                    </button>
                </div>
                <div className="border-b border-[#30363D] flex flex-col mt-4 px-2 py-2 pb-3">
                    {items.map((item, id) => id < 6 && (
                        <Link to={item?.href} className="flex gap-2 py-2 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md cursor-pointer transition-all duration-150 ease-in-out" key={id}>
                            <item.icon color="#7F8791" size={18} />
                            <h2 className="text-sm text-zinc-800 dark:text-[#E6EDF3]">{item.title}</h2>
                        </Link>
                    ))}
                </div>
                <div className="border-b border-[#30363D] flex flex-col gap-3 mt-2 px-2 py-2 pb-3">
                    {items.map((item, id) => id > 5 && (
                        <div className="flex gap-2" key={id}>
                            <item.icon color="#7F8791" size={18} />
                            <h2 className="text-sm text-zinc-800 dark:text-[#E6EDF3]">{item.title}</h2>
                        </div>
                    ))}
                </div>
                <div className="mt-4 pl-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xs font-semibold dark:text-[#7F8791]">Repositories</h2>
                        <button className="hover:bg-[#292E36] text-[#7F8791] hover:text-[#E6EDF3] text-lg p-1 rounded-md bg-transparent transition-all duration-200 ease-in-out">
                            <AiOutlineSearch />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    {repos.map((repo, id) => id < 6 && (
                        <div className="dark:text-[#E6EDF3] text-sm items-center flex gap-2" key={id}>
                            <Avatar img={currentUser?.photo} />
                            <div className="flex">
                                <h2>{currentUser?.name}</h2>
                                <h2 className="text-[#848D97]">/</h2>
                                <h2>{repo?.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SidebarModal