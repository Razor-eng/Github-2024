import Heading from "./Heading"

const Features = () => {
    return (
        <div>
            <Heading heading={'Features'} />
            <div className="border mt-4 border-zinc-200 dark:border-zinc-800 rounded-md">
                <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className={`h-3 border-[#262B32] w-4 cursor-pointer appearance-none checked:appearance-auto rounded-sm border transition-all`}
                                checked
                            />
                            <p className="text-sm font-medium">
                                Wikis
                            </p>
                        </div>
                        <p className="text-xs ml-6 text-[#848D97]">
                            Wikis host documentation for your repository.
                        </p>
                        <div className="flex flex-col gap-1 mt-2 ml-4">
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className={`h-3 border-[#262B32] min-w-4 cursor-pointer appearance-none checked:appearance-auto rounded-sm border transition-all`}
                                    checked
                                />
                                <p className="text-sm font-medium">
                                    Restrict editing to collaborators only
                                </p>
                            </div>
                            <p className="text-xs ml-6 text-[#848D97] mt-1">
                                Public wikis will still be readable by everyone.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-b border-zinc-200 dark:border-zinc-800 p-4">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className={`h-3 border-[#262B32] w-4 cursor-pointer appearance-none checked:appearance-auto rounded-sm border transition-all`}
                                checked
                            />
                            <p className="text-sm font-medium">
                                Issues
                            </p>
                        </div>
                        <p className="text-xs ml-6 text-[#848D97]">
                            Issues integrate lightweight task tracking into your repository. Keep projects on track with issue labels and milestones, and reference them in commit messages.
                        </p>
                        <div className="ml-6 border border-[#204980] mt-4 bg-[#111D2E] py-6 px-4 rounded-md flex items-center justify-between">
                            <div className="flex flex-col gap-2 max-w-[600px]">
                                <h2 className="text-sm font-semibold dark:text-white">Get organized with issue templates</h2>
                                <p className="text-sm">Give contributors issue templates that help you cut through the noise and help them push your project forward.</p>
                            </div>
                            <button className="px-2 py-1 bg-[#238636] text-white font-semibold rounded-md">Set up templates</button>
                        </div>
                    </div>
                </div>
                <div className="border-b border-zinc-200 dark:border-zinc-800 p-4">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className={`h-3 border-[#262B32] w-4 cursor-pointer appearance-none checked:appearance-auto rounded-sm border transition-all`}
                            />
                            <p className="text-sm font-medium">
                                Sponsorships
                            </p>
                        </div>
                        <p className="text-xs ml-6 text-[#848D97]">
                            Sponsorships help your community know how to financially support this repository.
                        </p>
                        <div className="ml-6 border border-[#204980] mt-4 bg-[#111D2E] py-6 px-4 rounded-md flex items-center justify-between">
                            <div className="flex flex-col gap-2 max-w-[600px]">
                                <h2 className="text-sm font-semibold dark:text-white">{'Display a "Sponsor" button'}</h2>
                                <p className="text-sm">Add links to GitHub Sponsors or third-party methods your repository accepts for financial contributions to your project.</p>
                            </div>
                            <button className="px-2 py-1 bg-[#238636] text-white font-semibold rounded-md">Set up sponsor button</button>
                        </div>
                    </div>
                </div>
                <div className="border-b border-zinc-200 dark:border-zinc-800 p-4">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className={`h-3 border-[#262B32] w-4 cursor-pointer appearance-none checked:appearance-auto rounded-sm border transition-all`}
                                checked
                            />
                            <p className="text-sm font-medium">
                                Preserve this repository
                            </p>
                        </div>
                        <p className="text-xs ml-6 text-[#848D97]">
                            Include this code in the <span className="underline text-[#4493F8]">GitHub Archive Program</span>
                        </p>
                    </div>
                </div>
                <div className="border-b border-zinc-200 dark:border-zinc-800 p-4">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className={`h-3 border-[#262B32] w-4 cursor-pointer appearance-none checked:appearance-auto rounded-sm border transition-all`}
                            />
                            <p className="text-sm font-medium">
                                Discussions
                            </p>
                        </div>
                        <p className="text-xs ml-6 text-[#848D97]">
                            Discussions is the space for your community to have conversations, ask questions and post answers without opening issues.
                        </p>
                        <div className="ml-6 border border-[#204980] mt-4 bg-[#111D2E] py-6 px-4 rounded-md flex items-center justify-between">
                            <div className="flex flex-col gap-2 max-w-[600px]">
                                <h2 className="text-sm font-semibold dark:text-white">Get started with Discussions</h2>
                                <p className="text-sm">Engage your community by having discussions right in your repository, where your community already lives</p>
                            </div>
                            <button className="px-2 py-1 bg-[#238636] text-white font-semibold rounded-md">Set up discussions</button>
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
                                Projects
                            </p>
                        </div>
                        <p className="text-xs ml-6 text-[#848D97]">
                            {"Projects on GitHub are created at the repository owner's level (organization or user) and can be linked to a repository's Projects tab. Projects are suitable for cross-repository development efforts such as feature work, complex product roadmaps or even Issue triage."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features