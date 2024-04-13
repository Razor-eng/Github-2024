import Heading from "./Heading"

const General = ({ repo }) => {
    return (
        <div>
            <Heading heading={'General'} />
            <div className="mt-3">
                <h2 className="font-semibold text-sm dark:text-white">Repository name</h2>
                <div className="flex gap-4 items-center">
                    <div className="w-72 p-2 border mt-2 focus-within:outline outline-none focus-within:outline-[#1F6FEB] border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-[#161B22] rounded-md">
                        <input type="text" placeholder={repo?.name} className="bg-transparent w-full h-full outline-none border-none" />
                    </div>
                    <button className="dark:bg-[#21262D] bg-zinc-300 dark:text-zinc-300 text-zinc-700 px-4 py-2 rounded-md">Rename</button>
                </div>
            </div>
            <div className="flex flex-col gap-1 mt-4">
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        className={`h-4 border-[#262B32] w-4 cursor-pointer appearance-none checked:appearance-auto rounded-sm border transition-all`}
                    />
                    <p className="text-sm font-medium">
                        Template repository
                    </p>
                </div>
                <p className="text-xs ml-6 text-[#848D97] mt-1">
                    Template repositories let users generate new repositories with the same directory structure and files. <span className="text-[#4493F8] underline">Learn more about template repositories.</span>
                </p>
            </div>
            <div className="flex flex-col gap-1 mt-4">
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        className={`h-4 border-[#262B32] min-w-4 cursor-pointer appearance-none checked:appearance-auto rounded-sm border transition-all`}
                    />
                    <p className="text-sm font-medium">
                        Require contributors to sign off on web-based commits
                    </p>
                </div>
                <p className="text-xs ml-6 text-[#848D97] mt-1">
                    Enabling this setting will require contributors to sign off on commits made through GitHub’s web interface. Signing off is a way for contributors to affirm that their commit complies with the {"repository's"} terms, commonly the <span className="text-[#4493F8] underline">Developer Certificate of Origin (DCO). Learn more about signing off on commits.</span>
                </p>
            </div>
        </div>
    )
}

export default General