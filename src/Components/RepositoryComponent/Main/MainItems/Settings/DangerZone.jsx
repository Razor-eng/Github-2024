import Heading from "./Heading"

const DangerZone = () => {
    const Items = [
        { ttle: 'Change repository visibility', description: 'This repository is currently public.', button: 'Change Visibility' },
        { ttle: 'Disable branch protection rules', description: 'Disable branch protection rules enforcement and APIs', button: 'Disable branch protection rules' },
        { ttle: 'Transfer ownership', description: 'Transfer this repository to another user or to an organization where you have the ability to create repositories.', button: 'Transfer' },
        { ttle: 'Archive this repository', description: 'Mark this repository as archived and read-only.', button: 'Archive this repository' },
        { ttle: 'Delete this repository', description: 'Once you delete a repository, there is no going back. Please be certain.', button: 'Delete this repository' }
    ]
    return (
        <div>
            <Heading heading={'Danger Zone'} />
            <div className="border mt-4 border-[#6B2A2B] rounded-md">
                {Items.map((item, id) => (
                    <div key={id} className="p-4 border-b border-zinc-200 dark:border-zinc-800">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-semibold">
                                    {item.ttle}
                                </p>
                                <p className="text-sm">
                                    {item.description}
                                </p>
                            </div>
                            <button className="text-sm font-semibold text-[#FB5149] bg-[#21262D] py-1 px-3 hover:text-white hover:bg-[#B62324] rounded-lg">
                                {item.button}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DangerZone