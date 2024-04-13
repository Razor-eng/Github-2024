const SuggestionCard = () => {
    return (
        <div className="border dark:border-zinc-700 border-zinc-300 px-[30px] py-[24px] w-[368px] rounded-md flex flex-col gap-3">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h2 className="font-semibold dark:text-white">Simple workflow</h2>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">By GitHub</p>
                </div>
                <div className="w-[42px] h-[42px] bg-zinc-300 rounded-full dark:bg-white flex items-center justify-center">
                    <div className="w-[60%] h-[60%] border-zinc-500 border border-dashed rounded-full">
                    </div>
                </div>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Start with a file with the minimum necessary structure.</p>
            <button className="px-3 text-xs font-semibold py-2 bg-zinc-300 dark:bg-[#292E36] hover:opacity-90 dark:text-white w-fit rounded-md">Configure</button>
        </div>
    )
}

export default SuggestionCard