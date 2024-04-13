import { GoRepo } from "react-icons/go";

const Overview = ({ repos, contribution, currentUser }) => {
    return (
        <div>
            <h2 className="dark:text-white">Popular repositories</h2>
            <div className="grid grid-cols-2 gap-4 mt-3">
                {repos.map((repo, id) => (
                    <div className="border dark:border-zinc-700 border-zinc-300 p-5 rounded-md pb-14 flex justify-between" key={id}>
                        <h2 className="cursor-pointer font-semibold hover:underline text-[#0969DA]">{repo?.name}</h2>
                        <p className="border border-zinc-300 dark:border-zinc-700 dark:text-zinc-200 text-zinc-800 rounded-full text-sm py-1 px-2">{repo?.public ? 'Public' : 'Private'}</p>
                    </div>
                ))}
            </div>
            {(contribution && contribution?.length !== 0) &&
                <div className="mt-8">
                    <p className="dark:text-white text-lg border-b border-zinc-300 dark:border-zinc-700 pb-2">{repos?.length} contributions in the last year</p>
                    <h2 className="dark:text-white mt-3">Contribution activity</h2>
                    <div className="p-4" >
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <h2 className="text-xs font-semibold w-40 dark:text-white">{contribution?.timeStamp}</h2>
                                <div className="border dark:border-zinc-700 border-zinc-300 h-0 w-full">
                                </div>
                            </div>
                            <div className="border dark:border-zinc-700 border-zinc-300 ml-7 w-0 min-h-40 flex items-center relative">
                                <div className="flex gap-2 p-10 items-center absolute -left-14 bottom-14 min-w-64">
                                    <div className="dark:bg-zinc-800 bg-zinc-200 p-2 rounded-full">
                                        <GoRepo className="dark:text-zinc-400 text-zinc-600" />
                                    </div>
                                    <p className="dark:text-white">Created 1 repository</p>
                                </div>
                                <div className="flex gap-1 p-10 items-center">
                                    <div>
                                        <GoRepo className="dark:text-zinc-200 text-zinc-800" />
                                    </div>
                                    <p className="text-sm hover:underline text-[#0969DA]">{currentUser?.name}/{contribution?.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className="mt-3 w-full py-3 cursor-pointer hover:opacity-90 border dark:border-zinc-700 border-zinc-300 bg-transparent text-[#0969DA] text-sm font-semibold flex items-center justify-center rounded-md">
                Show more activity
            </div>
            <p className="text-xs mt-6 text-zinc-500">Seeing something unexpected? Take a look at the <span className="text-[#0969DA] underline">GitHub profile guide</span>.</p>
        </div>
    )
}

export default Overview