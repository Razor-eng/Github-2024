const Heading = ({ heading }) => {
    return (
        <div className="border-b mt-3 flex border-zinc-300 dark:border-zinc-700 pb-2 justify-between items-center">
            <h2 className="text-2xl font-normal dark:text-white">
                {heading}
            </h2>
        </div>
    )
}

export default Heading