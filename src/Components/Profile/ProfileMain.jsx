import { useEffect } from "react";
import { useState } from "react"
import Footer from "../NewComponents/Footer/Footer";
import Overview from "./ProfileComponents/Overview";
import Repositories from "./ProfileComponents/Repositories";
import Projects from "./ProfileComponents/Projects";
import Packages from "./ProfileComponents/Packages";
import Stars from "./ProfileComponents/Stars";

const ProfileMain = ({ currentUser, repos, active }) => {
    const [contribution, setContribution] = useState([]);
    const ProfileItems = [
        { element: Overview },
        { element: Repositories },
        { element: Projects },
        { element: Packages },
        { element: Stars }
    ]

    useEffect(() => {
        setContribution(repos[0])
    }, [repos])

    return (
        <div className="mx-[120px] mt-[8px] px-[32px]">
            <div className="grid grid-cols-4">
                <div className="col-span-1 mt-10 flex flex-col gap-5">
                    <img src={currentUser?.photo || '/images/dashboard/navbar/placeholder.png'} alt="" className="w-[296px] h-[296px] rounded-full border border-zinc-300 dark:border-zinc-700 shadow-md" />
                    <h2 className="text-xl dark:text-zinc-300 text-zinc-700">{currentUser?.name}</h2>
                    <button className="dark:bg-[#21262D] bg-zinc-200 hover:opacity-90 dark:text-white flex items-center py-2 justify-center rounded-md">Edit profile</button>
                </div>
                <div className="col-span-3 mt-10 ml-4">
                    {ProfileItems.map((item, id) => id === active && (
                        <item.element key={id} repos={repos} contribution={contribution} currentUser={currentUser} />
                    ))}
                </div>
            </div>
            <div className="flex items-center w-full justify-center pb-10">
                <Footer />
            </div>
        </div>
    )
}

export default ProfileMain