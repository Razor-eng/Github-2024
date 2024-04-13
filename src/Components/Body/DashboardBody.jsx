import { useState } from "react"
import Main from "../DashboardComponents/Main/Main"
import SidebarModal from "../DashboardComponents/Modal/SidebarModal"
import Navbar from "../DashboardComponents/Navbar/Navbar"
import ProfileMenuModal from "../DashboardComponents/Modal/ProfileMenuModal"

const DashboardBody = ({ currentUser }) => {
    const [open, setOpen] = useState(false);
    const [profile, setProfile] = useState(false);

    return (
        <div className="w-screen min-h-screen dark:bg-[#010409]">
            <Navbar setOpen={setOpen} currentUser={currentUser} setProfile={setProfile} />
            <Main currentUser={currentUser} />
            <SidebarModal open={open} setOpen={setOpen} currentUser={currentUser} />
            <ProfileMenuModal open={profile} setOpen={setProfile} currentUser={currentUser} />
        </div>
    )
}

export default DashboardBody