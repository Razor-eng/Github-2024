import { IoCloseOutline, IoShareOutline } from "react-icons/io5";
import { AiOutlineFilter } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import UserAvatar from "../Avatar/UserAvatar";
import { GoCommentDiscussion, GoCopilot, GoOrganization, GoPeople, GoProject, GoSmiley } from "react-icons/go";
import { CiGlobe, CiHeart, CiLogout, CiSettings, CiStar, CiUser } from "react-icons/ci";
import { FaExchangeAlt } from "react-icons/fa";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { RiGitRepositoryLine } from "react-icons/ri";
import { BsCodeSquare } from "react-icons/bs";
import { Logout } from "../../../Api/AuthApi";

const ProfileMenuModal = ({ currentUser, open, setOpen }) => {
    const navigate = useNavigate();

    const items = [
        {
            icon: GoSmiley,
            title: 'Set status',
        },
        {
            icon: CiUser,
            title: 'Your profile',
            onClick: () => {
                navigate(`/profile/${currentUser?.name.split(' ').join('')}`, {
                    state: { id: currentUser?.id, email: currentUser?.email }
                })
            }
        },
        {
            icon: FaExchangeAlt,
            title: 'See all accounts'
        },
        {
            icon: HiOutlineUserPlus,
            title: 'Add account'
        },
        {
            icon: RiGitRepositoryLine,
            title: 'Your repositories'
        },
        {
            icon: GoProject,
            title: 'Your projects'
        },
        {
            icon: GoCopilot,
            title: 'Your copilot'
        },
        {
            icon: GoOrganization,
            title: 'Your organizations'
        },
        {
            icon: CiGlobe,
            title: 'Your enterprices'
        },
        {
            icon: CiStar,
            title: 'Your stars'
        },
        {
            icon: CiHeart,
            title: 'Your sponsors'
        },
        {
            icon: BsCodeSquare,
            title: 'Your gists'
        },
        {
            icon: IoShareOutline,
            title: 'Upgrade'
        },
        {
            icon: CiGlobe,
            title: 'Try Enterprise'
        },
        {
            icon: AiOutlineFilter,
            title: 'Feature preview'
        },
        {
            icon: CiSettings,
            title: 'Settings'
        },
        {
            icon: GoPeople,
            title: 'GitHub Support'
        },
        {
            icon: GoCommentDiscussion,
            title: 'GitHub Community'
        },
    ]

    return (
        <div className={`w-screen h-screen absolute top-0 flex justify-end bg-slate-800 bg-opacity-30 ${open ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
            <div className="w-[320px] h-full bg-zinc-200 dark:bg-[#161B22] p-4">
                <div className="flex justify-between">
                    <div
                        className="flex cursor-pointer items-center gap-2"
                        onClick={() => {
                            navigate(`/profile/${currentUser?.name.split(' ').join('')}`, {
                                state: { id: currentUser?.id, email: currentUser?.email }
                            })
                        }}
                    >
                        <UserAvatar />
                        <h2 className="text-lg font-semibold dark:text-zinc-200 to-zinc-700">{currentUser?.name}</h2>
                    </div>
                    <button
                        className="hover:bg-zinc-300 dark:hover:bg-[#292E36] text-[#7F8791] hover:text-zinc-600 dark:hover:text-[#E6EDF3] text-xl p-1 rounded-md bg-transparent transition-all duration-200 ease-in-out"
                        onClick={() => setOpen(false)}
                    >
                        <IoCloseOutline />
                    </button>
                </div>
                <div className="border-b border-zinc-400 dark:border-[#30363D] flex flex-col px-2 py-2">
                    {items.map((item, id) => id < 1 && (
                        <div className="flex gap-2 py-1 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md cursor-pointer transition-all duration-150 ease-in-out" key={id}>
                            <item.icon color="#7F8791" size={18} />
                            <h2 className="text-sm text-zinc-800 dark:text-[#E6EDF3]">{item.title}</h2>
                        </div>
                    ))}
                </div>
                <div className="border-b border-zinc-400 dark:border-[#30363D] flex flex-col px-2 py-1">
                    {items.map((item, id) => (id > 0 && id < 4) && (
                        <div onClick={item.onClick} className="flex gap-2 py-1 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md cursor-pointer transition-all duration-150 ease-in-out" key={id}>
                            <item.icon color="#7F8791" size={18} />
                            <h2 className="text-sm text-zinc-800 dark:text-[#E6EDF3]">{item.title}</h2>
                        </div>
                    ))}
                </div>
                <div className="border-b border-zinc-400 dark:border-[#30363D] flex flex-col px-2 py-1">
                    {items.map((item, id) => (id > 3 && id < 12) && (
                        <div className="flex gap-2 py-1 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md cursor-pointer transition-all duration-150 ease-in-out" key={id}>
                            <item.icon color="#7F8791" size={18} />
                            <h2 className="text-sm text-zinc-800 dark:text-[#E6EDF3]">{item.title}</h2>
                        </div>
                    ))}
                </div>
                <div className="border-b border-zinc-400 dark:border-[#30363D] flex flex-col px-2 py-1">
                    {items.map((item, id) => (id > 11 && id < 16) && (
                        <div className="flex gap-2 py-1 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md cursor-pointer transition-all duration-150 ease-in-out" key={id}>
                            <item.icon color="#7F8791" size={18} />
                            <h2 className="text-sm text-zinc-800 dark:text-[#E6EDF3]">{item.title}</h2>
                        </div>
                    ))}
                </div>
                <div className="border-b border-zinc-400 dark:border-[#30363D] flex flex-col px-2 py-1">
                    {items.map((item, id) => (id > 15) && (
                        <div className="flex gap-2 py-1 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md cursor-pointer transition-all duration-150 ease-in-out" key={id}>
                            <item.icon color="#7F8791" size={18} />
                            <h2 className="text-sm text-zinc-800 dark:text-[#E6EDF3]">{item.title}</h2>
                        </div>
                    ))}
                </div>
                <div className="mt-4 pl-2">
                    <div
                        className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 p-2 hover:bg-zinc-300 w-fit dark:bg-zinc-700 cursor-pointer"
                        onClick={Logout}
                    >
                        <CiLogout />
                        <h2 >
                            SignOut
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileMenuModal