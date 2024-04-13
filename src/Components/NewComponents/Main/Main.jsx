import { IoLockClosedOutline } from "react-icons/io5"
import { HiOutlineComputerDesktop } from "react-icons/hi2"
import { CiCircleInfo } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io"
import Avatar from "../Avatar/Avatar"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import Footer from "../Footer/Footer";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import getUid from "../../../helpers/getUid";
import { createRepo } from "../../../Api/FirestoreApi";

const Main = ({ currentUser }) => {
    const [isPublic, setIsPublic] = useState(true);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const createRepository = async () => {
        if (!name) {
            toast.error('Enter a valid repository name!')
        } else {
            let repoData = {
                name: name,
                email: currentUser?.email,
                timeStamp: getCurrentTimeStamp('LLL'),
                userName: currentUser?.name,
                repoId: getUid(),
                public: isPublic,
                description: description
            };
            await createRepo(repoData);
            await setName('');
            await setDescription('');
            navigate(`/${name.split(' ').join('')}`, {
                state: { id: repoData?.id, email: currentUser?.email }
            })
        }
    }

    return (
        <>
            <div className="w-[768px] mt-[40px] mx-[374px] px-[32px] dark:text-[#E6EDF3]">
                <div className="w-full border-b border-[#262B32] pb-2">
                    <h2 className="text-2xl font-semibold">Create a new repository</h2>
                    <p className="text-[#848D97] text-sm">A repository contains all project files, including the revision history. Already have a project repository elsewhere? <span className="underline text-[#4493F8]">Import a repository.</span></p>
                </div>
                <div className="w-full border-b border-[#262B32] mt-2 pb-3">
                    <h2 className="font-thin italic">Required fields are marked with an asterisk (*).</h2>
                    <div className="mt-4 flex items-center gap-4 mb-4">
                        <div className="flex flex-col gap-1">
                            <p className="">Owner*</p>
                            <div className="bg-zinc-300 dark:bg-[#292E36] flex items-center gap-2 font-semibold px-6 py-2 rounded-md cursor-pointer">
                                <Avatar photo={currentUser?.photo} />
                                <h2 className="dark:text=[#C9D1D9]">{currentUser?.name}</h2>
                                <IoMdArrowDropdown color="#848D97" />
                            </div>
                        </div>
                        <h2 className="text-2xl mt-5">/</h2>
                        <div className="flex flex-col gap-1">
                            <p className="">Repository name*</p>
                            <div className="bg-transparent flex items-center gap-2 font-semibold rounded-md w-[181px] cursor-pointer">
                                <input
                                    type="text"
                                    className="w-full px-2 py-2 border border-[#262B32] text-sm dark:text-[#E6EDF3] focus:outline-[#1F6FEB] outline-none focus:border-none focus:outline bg-transparent rounded-md"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <p className="text-sm font-light">Great repository names are short and memorable. Need inspiration? How about <span className="text-[#3FB950]">cautious sniffle</span> ?</p>
                    <div className="w-full mt-2">
                        <h2 className="">Description <span className="text-[#848D97] text-xs">(optional)</span></h2>
                        <div className="bg-transparent flex items-center gap-2 font-semibold rounded-md w-full cursor-pointer mt-1">
                            <input
                                type="text"
                                className="w-full px-2 py-2 border border-[#262B32] text-sm dark:text-[#E6EDF3] focus:outline-[#1F6FEB] outline-none focus:outline bg-transparent rounded-md"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="border-b border-[#262B32] mt-3 pb-3 flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-4">
                            <input
                                type="checkbox"
                                className={`h-4 border-[#262B32] w-4 cursor-pointer appearance-none rounded-full border transition-all before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity ${isPublic ? 'bg-[#4493F8]' : ''}`}
                                onChange={() => setIsPublic(true)}
                            />
                            <HiOutlineComputerDesktop size={26} className="dark:text-[#E6EDF3] text-zinc-400" />
                        </div>
                        <label className="mt-px font-light cursor-pointer select-none" htmlFor="description">
                            <div>
                                <p className="text-sm font-medium">
                                    Public
                                </p>
                                <p className="text-xs text-[#848D97]">
                                    Anyone on the internet can see this repository. You choose who can commit.
                                </p>
                            </div>
                        </label>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-4">
                            <input
                                type="checkbox"
                                className={`h-4 border-[#262B32] w-4 cursor-pointer appearance-none rounded-full border transition-all before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity ${!isPublic ? 'bg-[#4493F8]' : ''}`}
                                onChange={() => setIsPublic(false)}
                            />
                            <IoLockClosedOutline size={26} className="dark:text-[#E6EDF3] text-zinc-400" />
                        </div>
                        <label className="mt-px font-light cursor-pointer select-none">
                            <div>
                                <p className="text-sm font-medium">
                                    Private
                                </p>
                                <p className="text-xs text-[#848D97]">
                                    You choose who can see and commit to this repository.
                                </p>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="w-full mt-3 border-b border-[#262B32] pb-3 flex flex-col gap-2">
                    <div>
                        <h2 className="font-semibold">Initialize this repository with:</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <input
                                type="checkbox"
                                className={`h-4 border-[#262B32] w-4 cursor-pointer appearance-none checked:appearance-auto rounded-sm border transition-all`}
                            />
                            <label className="font-light cursor-pointer select-none">
                                <div>
                                    <p className="text-sm font-medium">
                                        Add a README file
                                    </p>
                                    <p className="text-xs text-[#848D97]">
                                        This is where you can write a long description for your project. <span className="text-[#4493F8] underline">Learn more about READMEs.</span>
                                    </p>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold">Add .gitignore</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <label className="font-light cursor-pointer select-none">
                                <div>
                                    <div className="bg-zinc-300 dark:bg-[#292E36] w-fit flex items-center gap-1 font-semibold px-6 py-2 rounded-md cursor-pointer">
                                        <h2 className="dark:text-[#848D97] font-bold flex items-center gap-1 text-[10px]">.gitignore template: <span className="text-[#C9D1D9] text-xs">None</span></h2>
                                        <IoMdArrowDropdown color="#848D97" />
                                    </div>
                                    <p className="text-xs mt-1 text-[#848D97]">
                                        Choose which files not to track from a list of templates. <span className="text-[#4493F8] underline">Learn more about ignoring files.</span>
                                    </p>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold">Choose a license</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <label className="font-light cursor-pointer select-none">
                                <div>
                                    <div className="bg-zinc-300 dark:bg-[#292E36] w-fit flex items-center gap-1 font-semibold px-6 py-2 rounded-md cursor-pointer">
                                        <h2 className="dark:text-[#848D97] font-bold flex items-center gap-1 text-[10px]">License: <span className="text-[#C9D1D9] text-xs">None</span></h2>
                                        <IoMdArrowDropdown color="#848D97" />
                                    </div>
                                    <p className="text-xs mt-1 text-[#848D97]">
                                        A license tells others what they can and {"can't"} do with your code. <span className="text-[#4493F8] underline">Learn more about Licenses.</span>
                                    </p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-3 pb-5 border-b border-[#262B32]">
                    <p className="text-[#848D97] text-sm flex items-center gap-2">
                        <CiCircleInfo size={18} />
                        You are creating a {isPublic ? 'public' : 'private'} repository in your personal account.
                    </p>
                </div>
                <div className="w-full mt-5 flex justify-end">
                    <button
                        className="dark:text-white bg-[#238636] hover:opacity-85 text-sm font-semibold px-3 rounded-md py-2"
                        onClick={createRepository}
                    >
                        Create repository
                    </button>
                </div>
            </div>
            <div className="w-full pb-8 flex justify-center">
                <Footer />
            </div>
        </>
    )
}

export default Main