import { useEffect, useState } from "react";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { getUserRepos } from "../../../../Api/FirestoreApi";
import Avatar from "./Avatar";

const Sidebar = ({ currentUser }) => {
    const [repos, setRepos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        currentUser && getUserRepos(setRepos, currentUser?.email)
    }, [currentUser])

    const gotoRepo = (repo) => {
        navigate(`/${repo.name.split(' ').join('')}`, {
            state: { id: repo.repoId, email: currentUser.email }
        })
    }

    return (
        <div className="pt-12 h-full sm:px-6 border-r dark:border-[#30363D] border-[#D0D7DE]">
            <div>
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
                    <h2 className="hidden sm:block text-zinc-900 dark:text-zinc-100 text-sm font-semibold">Top Repositories</h2>
                    <Link to={'/new'} className="text-xs text-white font-semibold bg-[#238636] px-3 py-2 rounded-md hover:opacity-90 flex items-center gap-2">
                        <HiOutlineComputerDesktop size={16} />
                        New
                    </Link>
                </div>
                <div className="w-full mt-2 hidden sm:block">
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-[#D0D7DE] text-sm placeholder-[#848D97] dark:text-[#E6EDF3] text-slate-900 focus:outline-[#1F6FEB] outline-none focus:outline focus:border-none dark:border-[#30363D] dark:bg-[#161B22] rounded-lg"
                        placeholder="Find a repository..."
                    />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    {repos?.map((repo, id) => id < 6 && (
                        <div
                            className="dark:text-[#E6EDF3] text-sm items-center flex gap-2 hover:underline cursor-pointer"
                            key={id}
                            onClick={() => gotoRepo(repo)}
                        >
                            <Avatar img={currentUser?.photo} />
                            <div className="flex">
                                <h2>{currentUser?.name}</h2>
                                <h2 className="text-[#848D97]">/</h2>
                                <h2>{repo?.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6">
                    <h2 className="hidden sm:block text-zinc-900 dark:text-zinc-100 text-sm font-semibold">Recent Activity</h2>
                    <div className="flex rounded-md py-5 w-full mt-2 border-dashed border dark:border-[#30363D] border-[#D0D7DE] p-4">
                        <h2 className="text-xs text-[#848D97]">When you take actions across GitHub, we’ll provide links to that activity here.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar