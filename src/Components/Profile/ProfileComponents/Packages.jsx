const Packages = () => {
    const PackageItems = [
        { title: 'Docker', description: 'A software platform used for building applications based on containers — small and lightweight execution environments.' },
        { title: 'Apache Maven', description: 'A default package manager used for the Java programming language and the Java runtime environment.' },
        { title: 'NuGet', description: 'A free and open source package manager used for the Microsoft development platforms including .NET.' },
        { title: 'RubyGems', description: 'A standard format for distributing Ruby programs and libraries used for the Ruby programming language.' },
        { title: 'npm', description: 'A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.' },
        { title: 'Containers', description: 'A single place for your team to manage Docker images and decide who can see and access your images.' },
    ]
    return (
        <div className='mt-3 gap-3 flex w-full justify-center flex-col items-center'>
            <img src="/images/profile/packages/logo.svg" alt="" className="w-16" />
            <h2 className="text-3xl dark:text-white font-semibold">
                Get started with GitHub Packages
            </h2>
            <p className="text-zinc-500">
                Safely publish packages, store your packages alongside your code, and share your packages privately with your team.
            </p>
            <p className="text-xl mt-6 text-zinc-500">
                Choose a registry
            </p>
            <div className="grid grid-cols-3 gap-4">
                {PackageItems.map((item, id) => (
                    <div className="border p-5 rounded-md flex flex-col gap-3 border-zinc-300 dark:border-zinc-700" key={id}>
                        <div className="flex items-center gap-2">
                            <img src={`/images/profile/packages/${id + 1}.svg`} alt="" className='w-4' />
                            <h2 className="text-2xl dark:text-white font-semibold">{item.title}</h2>
                        </div>
                        <p className="text-xs text-zinc-500">
                            {item.description}
                        </p>
                        <button className="border py-2 px-3 w-fit rounded-md border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 text-xs font-semibold">
                            Learn more
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Packages