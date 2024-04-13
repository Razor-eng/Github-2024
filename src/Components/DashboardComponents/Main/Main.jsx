import Home from "./Home/Home"
import Sidebar from "./Sidebar/Sidebar"

const Main = ({ currentUser }) => {
    return (
        <div className="flex dark:bg-[#010409] bg-zinc-100">
            <div className="w-[340px] h-screen dark:bg-[#0D1117] bg-zinc-200">
                <Sidebar currentUser={currentUser} />
            </div>
            <div className="min-h-screen">
                <Home />
            </div>
        </div>
    )
}

export default Main