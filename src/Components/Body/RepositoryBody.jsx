import { useState } from "react";
import Main from "../RepositoryComponent/Main/Main";
import SidebarModal from "../DashboardComponents/Modal/SidebarModal";
import ProfileMenuModal from "../DashboardComponents/Modal/ProfileMenuModal";
import DoubleNavbar from "../RepositoryComponent/Navbar/DoubleNavbar";

const RepositoryBody = ({ currentuser, repo }) => {
    const [open, setOpen] = useState(false);
    const [profile, setProfile] = useState(false);
    const [active, setActive] = useState(0);

    return (
        <div className="w-screen min-h-screen bg-zinc-100 dark:bg-[#0D1117]">
            <DoubleNavbar setOpen={setOpen} currentUser={currentuser} setProfile={setProfile} repo={repo} active={active} setActive={setActive} />
            <Main currentUser={currentuser} repo={repo} active={active} />
            <SidebarModal open={open} setOpen={setOpen} currentUser={currentuser} />
            <ProfileMenuModal open={profile} setOpen={setProfile} currentUser={currentuser} />
        </div>
    )
}

export default RepositoryBody