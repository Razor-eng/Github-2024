import { GoDotFill } from "react-icons/go";

const ActionsCard = ({ title, img, author, description, action, color }) => {
    return (
        <div className="border dark:border-zinc-700 border-zinc-300 px-[24px] py-[16px] w-[288px] h-[202px] rounded-md flex flex-col justify-between">
            <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                    <div className="flex flex-col w-[168px]">
                        <h2 className="font-semibold dark:text-white">{title}</h2>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">By {author}</p>
                    </div>
                    <div className="p-1 flex justify-center items-center bg-zinc-300 dark:bg-white rounded-full w-[32px] h-[32px]">
                        <img src={img} alt="image" className="rounded-full" />
                    </div>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">{description}</p>
            </div>
            <div className="flex items-center justify-between">
                <button className="px-3 py-2 text-xs font-semibold bg-zinc-300 dark:bg-[#292E36] hover:opacity-90 dark:text-white w-fit rounded-md">Configure</button>
                <p className="text-xs font-semibold flex items-center gap-1 text-zinc-500">{action} <GoDotFill color={color} size={20} /></p>
            </div>
        </div>
    )
}

export default ActionsCard