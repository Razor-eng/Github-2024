const GithubActions = ({ title, description, img }) => {
    return (
        <div className="w-[360px] h-[160px] bg-zinc-300 dark:bg-[#161B22] py-6 px-6 rounded-md flex">
            <div className="flex flex-col gap-2">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-zinc-500 text-sm">{description}</p>
            </div>
            <img src={img} alt="" className="w-[56px] h-[56px]" />
        </div>
    )
}

export default GithubActions