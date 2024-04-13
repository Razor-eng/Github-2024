import Footer from "../../NewComponents/Footer/Footer";
import Actions from "./MainItems/Actions";
import Code from "./MainItems/Code";
import Insights from "./MainItems/Insights";
import Issues from "./MainItems/Issues";
import Projects from "./MainItems/Projects";
import PullRequests from "./MainItems/PullRequests";
import Security from "./MainItems/Security";
import Settings from "./MainItems/Settings";
import Wiki from "./MainItems/Wiki";

const Main = ({ currentUser, repo, active }) => {
    const MainItems = [
        {
            element: Code
        },
        {
            element: Issues
        },
        {
            element: PullRequests
        },
        {
            element: Actions
        },
        {
            element: Projects
        },
        {
            element: Wiki
        },
        {
            element: Security
        },
        {
            element: Insights
        },
        {
            element: Settings
        },
    ]

    return (
        <>
            {MainItems.map((item, id) => id === active && (
                <item.element currentUser={currentUser} key={id} repo={repo} />
            ))}
            <div className="w-full flex justify-center pb-6">
                <Footer />
            </div>
        </>
    )
}

export default Main