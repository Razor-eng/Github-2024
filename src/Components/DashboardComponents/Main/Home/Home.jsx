import { IoFilterSharp } from "react-icons/io5";
import Released from "./Repositories/Released";
import Widget from "../Widget/Widget";
import Trending from "./Repositories/Trending";
import Recommended from "./Repositories/Recommended";
import Footer from "../../../NewComponents/Footer/Footer";

const Home = () => {
    return (
        <div className="flex">
            <div className="pt-5 w-full lg:w-[800px]">
                <div className="lg:px-7 px-1">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl sm:text-2xl dark:text-[#E6EDF3] font-semibold">Home</h2>
                        <div className="flex gap-3 items-center">
                            <p className="text-[#4493F8] text-xs sm:text-sm hover:underline">Send feedback</p>
                            <button className="rounded-sm sm:rounded-md dark:bg-[#292E36] p-1 px-3 gap-2 hover:opacity-90 flex items-center">
                                <IoFilterSharp size={16} color="#848D97" />
                                <p className="text-xs sm:text-sm font-semibold text-[#C9D1D9]">Filter</p>
                            </button>
                        </div>
                    </div>
                    <Released />
                    <Trending />
                    <Recommended />
                </div>
                <Footer />
            </div>
            <div className="hidden lg:block">
                <Widget />
            </div>
        </div>
    )
}

export default Home