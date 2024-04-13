import Heading from "./Heading"
import { IoMdArrowDropdown } from "react-icons/io";

const PullRequests = () => {
    return (
        <div>
            <Heading heading={'Pull Requests'} />
            <p className="dark:text-white font-light mb-2 mt-5">When merging pull requests, you can allow any combination of merge commits, squashing, or rebasing. At least one option must be enabled. If you have linear history requirement enabled on any protected branch, you must enable squashing or rebasing.</p>
            <div className="border mt-4 border-zinc-200 dark:border-zinc-800 text-sm rounded-md">
                <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className={`h-3 border-[#262B32] w-4 cursor-pointer appearance-none checked:appearance-auto rounded-sm border transition-all`}
                                checked
                            />
                            <p className="text-sm font-medium">
                                Allow merge commits
                            </p>
                        </div>
                        <p className="text-xs ml-6 text-[#848D97]">
                            Add all commits from the head branch to the base branch with a merge commit.                        </p>
                        <div className="flex flex-col gap-1 mt-2 ml-6">
                            <p className="text-sm font-medium">
                                Default commit message
                            </p>
                            <p className="text-xs text-[#848D97]">
                                Presented when merging a pull request with merge.
                            </p>
                            <button className="text-sm font-semibold dark:text-zinc-300 text-zinc-700 flex items-center dark:bg-[#21262D] bg-zinc-300 w-fit py-2 px-3 rounded-md mt-1">Default message <IoMdArrowDropdown /></button>
                        </div>
                    </div>
                </div>
                <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className={`h-3 border-[#262B32] w-4 cursor-pointer appearance-none checked:appearance-auto rounded-sm border transition-all`}
                                checked
                            />
                            <p className="text-sm font-medium">
                                Allow squash merging
                            </p>
                        </div>
                        <p className="text-xs ml-6 text-[#848D97]">
                            Combine all commits from the head branch into a single commit in the base branch.
                        </p>
                        <div className="flex flex-col gap-1 mt-2 ml-6">
                            <p className="text-sm font-medium">
                                Default commit message
                            </p>
                            <p className="text-xs text-[#848D97]">
                                Presented when merging a pull request with squash.
                            </p>
                            <button className="text-sm font-semibold dark:text-zinc-300 text-zinc-700 flex items-center dark:bg-[#21262D] bg-zinc-300 w-fit py-2 px-3 rounded-md mt-1">Default message <IoMdArrowDropdown /></button>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className={`h-3 border-[#262B32] w-4 cursor-pointer appearance-none checked:appearance-auto rounded-sm border transition-all`}
                                checked
                            />
                            <p className="text-sm font-medium">
                                Allow rebase merging
                            </p>
                        </div>
                        <p className="text-xs ml-6 text-[#848D97]">
                            Add all commits from the head branch onto the base branch individually.
                        </p>
                    </div>
                </div>
            </div>
            <p className="dark:text-white font-light mb-2 mt-5 text-sm">Control how and when users are prompted to update their branches if there are new changes available in the base branch.</p>
            <div className="p-4 border border-zinc-200 dark:border-zinc-800">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className={`h-3 border-[#262B32] w-4 cursor-pointer appearance-none checked:appearance-auto rounded-sm border transition-all`}
                        />
                        <p className="text-sm font-medium">
                            Always suggest updating pull request branches
                        </p>
                    </div>
                    <p className="text-xs ml-6 text-[#848D97]">
                        {"Whenever there are new changes available in the base branch, present an “update branch” option in the pull request."}
                    </p>
                </div>
            </div>
            <p className="dark:text-white font-light mb-2 mt-5 text-sm">You can allow setting pull requests to merge automatically once all required reviews and status checks have passed.</p>
            <div className="p-4 border border-zinc-200 dark:border-zinc-800">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className={`h-3 border-[#262B32] w-4 cursor-pointer appearance-none checked:appearance-auto rounded-sm border transition-all`}
                        />
                        <p className="text-sm font-medium">
                            Allow auto-merge
                        </p>
                    </div>
                    <p className="text-xs ml-6 text-[#848D97]">
                        Waits for merge requirements to be met and then merges automatically. <span className="text-[#4493F8] hover:underline">Learn more</span>
                    </p>
                </div>
            </div>
            <p className="dark:text-white font-light mb-2 mt-5 text-sm">After pull requests are merged, you can have head branches deleted automatically.</p>
            <div className="p-4 border border-zinc-200 dark:border-zinc-800">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className={`h-3 border-[#262B32] w-4 cursor-pointer appearance-none checked:appearance-auto rounded-sm border transition-all`}
                        />
                        <p className="text-sm font-medium">
                            Automatically delete head branches
                        </p>
                    </div>
                    <p className="text-xs ml-6 text-[#848D97]">
                        Deleted branches will still be able to be restored.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PullRequests