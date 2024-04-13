import { useState } from "react";
import ProfileMain from "../Profile/ProfileMain"
import DoubleNavbar from "../RepositoryComponent/Navbar/DoubleNavbar"
import ProfileMenuModal from "../DashboardComponents/Modal/ProfileMenuModal";
import SidebarModal from "../DashboardComponents/Modal/SidebarModal";

const ProfileBody = ({ currentUser, repos }) => {
    const [open, setOpen] = useState(false);
    const [profile, setProfile] = useState(false);
    const [active, setActive] = useState(0);

    return (
        <div className="w-screen min-h-screen bg-zinc-100 dark:bg-[#0D1117]">
            <DoubleNavbar setOpen={setOpen} currentUser={currentUser} setProfile={setProfile} active={active} setActive={setActive} repos={repos} />
            <ProfileMain currentUser={currentUser} repos={repos} active={active} />
            <SidebarModal open={open} setOpen={setOpen} currentUser={currentUser} />
            <ProfileMenuModal open={profile} setOpen={setProfile} currentUser={currentUser} />
        </div>
    )
}

export default ProfileBody