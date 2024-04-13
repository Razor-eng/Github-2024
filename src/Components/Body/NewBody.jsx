import { useState } from "react"
import Navbar from "../DashboardComponents/Navbar/Navbar";
import SidebarModal from "../DashboardComponents/Modal/SidebarModal";
import Main from "../NewComponents/Main/Main";

const NewBody = ({ currentUser }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-screen min-h-screen bg-zinc-100 dark:bg-[#0D1117]">
            <Navbar setOpen={setOpen} currentUser={currentUser} />
            <Main currentUser={currentUser} />
            <SidebarModal open={open} setOpen={setOpen} currentUser={currentUser} />
        </div>
    )
}

export default NewBody