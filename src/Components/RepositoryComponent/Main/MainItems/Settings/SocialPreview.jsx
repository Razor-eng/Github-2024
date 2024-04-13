import Heading from "./Heading"
import { HiOutlinePencil } from "react-icons/hi";

const SocialPreview = () => {
    return (
        <div>
            <Heading heading={'Social Preview'} />
            <div className="mt-3">
                <div className="flex flex-col gap-2">
                    <p className="text-sm dark:text-zinc-100 text-zinc-900">Upload an image to customize your repository’s social media preview.</p>
                    <p className="text-sm dark:text-zinc-100 text-zinc-900">Images should be at least 640×320px (1280×640px for best display).</p>
                </div>
                <button className="text-sm font-semibold text-[#4493F8] hover:underline">Download template</button>
                <button className="mt-2 border dark:border-zinc-800 border-zinc-200 p-2 text-sm flex gap-1 items-center font-semibold rounded-md"><HiOutlinePencil /> Edit</button>
            </div>
        </div>
    )
}

export default SocialPreview