import { useEffect, useState } from "react"
import { IoMdArrowDropdown } from "react-icons/io";

const Insights = ({ currentUser, repo }) => {
    const [active, setActive] = useState(0);
    const [currentDate, setCurrentDate] = useState('');
    const [lastDate, setLastDate] = useState('');

    useEffect(() => {
        let newDate = new Date()
        let newLastDate = new Date()
        newLastDate.setDate(newLastDate.getDate() - 7)
        let date = newDate.getDate();
        let month = newDate.getMonth();
        let year = newDate.getFullYear();
        let oldDate = newLastDate.getDate();
        let oldMonth = newLastDate.getMonth();
        let oldYear = newLastDate.getFullYear();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        setCurrentDate(JSON.stringify(monthNames[month] + ' ' + date + ', ' + year))
        setLastDate(JSON.stringify(monthNames[oldMonth] + ' ' + oldDate + ', ' + oldYear))
    }, [])

    const Items = [
        'Pulse', 'Contributors', 'Community', 'Community Standards', 'Traffic', 'Commits', 'Code frequency', 'Dependency graph', 'Network', 'Forks'
    ]

    return (
        <>
            {
                (currentDate && lastDate) &&
                <div className='pt-[24px] px-[162px] grid grid-cols-4'>
                    <div className="col-span-1">
                        <div className="border dark:border-zinc-700 border-zinc-300 rounded-sm">
                            {Items.map((item, id) => (
                                <div
                                    key={id}
                                    className={`${active === id ? 'border-l-2 border-[#F78166] dark:bg-[#161B22] bg-zinc-300' : ''} border-b cursor-pointer hover:dark:bg-slate-800 hover:bg-slate-200 border-b-zinc-300 dark:border-b-zinc-700 pl-3 rounded-r-md p-2`}
                                    onClick={() => setActive(id)}
                                >
                                    <h2 className="text-sm dark:text-white">{item}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="ml-4 col-span-3 dark:text-zinc-100 text-zinc-900">
                        <div className="border-b flex border-zinc-300 dark:border-zinc-700 pb-2 justify-between items-center">
                            <h2 className="text-2xl font-normal dark:text-white">
                                {JSON.parse(lastDate)} - {JSON.parse(currentDate)}
                            </h2>
                            <button className="dark:bg-[#21262D] gap-1 rounded-lg bg-zinc-200 dark:text-zinc-400 text-zinc-600 px-3 py-1 flex items-center">Period: <span className="dark:text-zinc-300 text-zinc-700 flex items-center">1 week <IoMdArrowDropdown /></span></button>
                        </div>
                        <div className="mt-4 border border-zinc-300 dark:border-zinc-700 rounded-md">
                            <div className="dark:bg-[#161B22] bg-zinc-200 p-4">
                                <h2 className="dark:text-white font-semibold">Overview</h2>
                            </div>
                            <div className="p-4 border-t border-zinc-300 dark:border-zinc-700 py-6 grid grid-cols-2 gap-8">
                                <h2 className="dark:text-white border-t-8 dark:border-zinc-700 border-zinc-300 rounded-sm pt-2 font-semibold">0 <span className="font-light">Active pull requests</span></h2>
                                <h2 className="dark:text-white border-t-8 dark:border-zinc-700 border-zinc-300 rounded-sm pt-2 font-semibold">0 <span className="font-light">Active issues</span></h2>
                            </div>
                            <div className="border-t border-zinc-300 dark:border-zinc-700 grid grid-cols-4">
                                <div className="border-r dark:border-zinc-700 border-zinc-300 p-6">
                                    <div className="dark:text-white font-semibold flex flex-col justify-center items-center">
                                        <div className="flex gap-2">
                                            <img src="/images/repository/insights/1.svg" alt="" />0
                                        </div>
                                        <span className="font-light text-zinc-500">Merged pull requests</span></div>
                                </div>
                                <div className="border-r dark:border-zinc-700 border-zinc-300 p-6">
                                    <div className="dark:text-white font-semibold flex flex-col justify-center items-center">
                                        <div className="flex gap-2">
                                            <img src="/images/repository/insights/2.svg" alt="" />0
                                        </div>
                                        <span className="font-light text-zinc-500">Open pull requests</span></div>
                                </div>
                                <div className="border-r dark:border-zinc-700 border-zinc-300 p-6">
                                    <div className="dark:text-white font-semibold flex flex-col justify-center items-center">
                                        <div className="flex gap-2">
                                            <img src="/images/repository/insights/3.svg" alt="" />0
                                        </div>
                                        <span className="font-light text-zinc-500">Closed issues</span></div>
                                </div>
                                <div className="p-6">
                                    <div className="dark:text-white font-semibold flex flex-col justify-center items-center">
                                        <div className="flex gap-2">
                                            <img src="/images/repository/insights/4.svg" alt="" />0
                                        </div>
                                        <span className="font-light text-zinc-500">New issues</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 font-semibold flex justify-center dark:text-white">There hasn’t been any commit activity on {currentUser?.name}/{repo?.name} in the last week.</div>
                    </div>
                </div>
            }
        </>

    )
}

export default Insights