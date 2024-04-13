import { BsSearch } from "react-icons/bs";
import ActionsCard from "../../Card/ActionsCard"
import SuggestionCard from "../../Card/SuggestionCard"
import { FaArrowRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import GithubActions from "../../Card/GithubActions";

const Actions = () => {
    const Deployments = [
        {
            title: 'Deploy Node.js to Azure Web App',
            author: 'Microsoft Azure',
            description: 'Build a Node.js project and deploy it to an Azure Web App.',
        },
        {
            title: 'Deploy to Amazon ECS',
            author: 'Amazon Web Services',
            description: 'Deploy a container to an Amazon ECS service powered by AWS Fargate or Amazon EC2.',
        },
        {
            title: 'Build and Deploy to GKE',
            author: 'Google Cloud',
            description: 'Build a docker container, publish it to Google Container Registry, and deploy to GKE.',
        },
        {
            title: 'Terraform',
            author: 'HashiCorp',
            description: 'Set up Terraform CLI in your GitHub Actions workflow.',
        },
        {
            title: 'Deploy to Alibaba Cloud ACK',
            author: 'Alibaba Cloud',
            description: 'Deploy a container to Alibaba Cloud Container Service for Kubernetes (ACK).',
        },
        {
            title: 'Deploy to IBM Cloud Kubernetes Service',
            author: 'IBM',
            description: 'Build a docker container, publish it to IBM Cloud Container Registry, and deploy to IBM Cloud Kubernetes Service.',
        },
        {
            title: 'Tencent Kubernetes Engine',
            author: 'Tencent Cloud',
            description: 'This workflow will build a docker container, publish and deploy it to Tencent Kubernetes Engine (TKE).',
        },
        {
            title: 'OpenShift',
            author: 'Red Hat',
            description: 'Build a Docker-based project and deploy it to OpenShift.',
        }
    ]
    const Security = [
        {
            title: 'CodeQL Analysis',
            author: 'GitHub',
            description: 'Security analysis from GitHub for C, C++, C#, Go, Java, JavaScript, TypeScript, Python, Ruby, Kotlin and Swift developers.',
        },
        {
            title: 'PHPMD',
            author: 'GitHub Actions',
            description: 'A spin-off project of PHP Depend and aims to be a PHP equivalent of the well known Java tool PMD.',
        },
        {
            title: 'Anchore Syft SBOM Scan',
            author: 'Anchore',
            description: "Produce Software Bills of Materials based on Anchore's open source Syft tool.",
        },
        {
            title: 'Fortify on Demand Scan',
            author: 'Micro Focus',
            description: "Integrate Fortify's comprehensive static code analysis (SAST) for 27+ languages into your DevSecOps workflows to build secure software faster.",
        }
    ]
    const Intgrations = [
        {
            title: 'Publish Node.js Package',
            author: 'GitHub Actions',
            description: 'Publishes a Node.js package to npm.',
            action: 'JavaScript',
            color: '#F1E05A'
        },
        {
            title: 'SLSA Generic generator',
            author: 'Open Source Security Foundation (OpenSSF)',
            description: 'Generate SLSA3 provenance for your existing release workflows',
            action: 'Go',
            color: '#00ADD8'
        },
        {
            title: 'Docker Image',
            author: 'GitHub Actions',
            description: 'Build a Docker image to deploy, run, or push to a registry.',
            action: 'Dockerfile',
            color: '#384D54'
        },
        {
            title: 'Publish Docker Container',
            author: 'GitHub Actions',
            description: 'Build, test and push Docker image to GitHub Packages.',
            action: 'Dockerfile',
            color: '#384D54'
        },
    ]
    const Automations = [
        {
            title: 'Labeler',
            author: 'GitHub Actions',
            description: 'Labels pull requests based on the files changed',
        },
        {
            title: 'Greetings',
            author: 'GitHub Actions',
            description: 'Greets users who are first time contributors to the repo',
        },
        {
            title: 'Stale',
            author: 'GitHub Actions',
            description: 'Checks for stale issues and pull requests',
        },
        {
            title: 'Manual Workflow',
            author: 'GitHub Actions',
            description: 'Simple workflow that is manually triggered.',
        }
    ]
    const Pages = [
        {
            title: 'mdBook',
            author: 'GitHub Actions',
            description: 'Package a site using mdBook.',
        },
        {
            title: 'Package a site using mdBook.',
            author: 'GitHub Actions',
            description: 'Package a site using mdBook.',
        },
        {
            title: 'NuxtJS',
            author: 'GitHub Actions',
            description: 'Package a NuxtJS site.',
        },
        {
            title: 'Next.js',
            author: 'GitHub Actions',
            description: 'Package a Next.js site.',
        }
    ]
    const GithubAction = [
        {
            title: 'Getting started and core concepts',
            description: 'New to Actions? Start here. Learn the core concepts and how to get started.',
        },
        {
            title: 'Configuring and managing workflows',
            description: "Create custom workflows to control your project's life cycle processes.",
        },
        {
            title: 'Language and framework guides',
            description: 'Guides for projects written in many programming languages.',
        },
    ]

    return (
        <div className="mt-[24px] mx-[120px] px-[24px] dark:text-white">
            <div className="px-[40px]">
                <div className="mt-[32px] py-5 flex flex-col gap-3">
                    <h2 className="text-3xl font-bold">Get started with GitHub Actions</h2>
                    <p className="text-zinc-500 text-sm">Build, test, and deploy your code. Make code reviews, branch management, and issue triaging work the way you want. Select a workflow to get started.</p>
                    <p className="text-zinc-500 text-sm flex items-center gap-1">Skip this and <span className="text-[#4493F8] hover:underline flex items-center gap-1">set up a workflow yourself <FaArrowRight /></span></p>
                </div>
                <div className="dark:border-zinc-700 flex w-[384px] px-3 rounded-md p-2 border border-zinc-300 items-center outline-none focus:outline focus-within:outline-[#1F6FEB]">
                    <BsSearch />
                    <input
                        type="text"
                        placeholder="Search Workflows"
                        className="w-full h-full bg-transparent outline-none placeholder-zinc-500 text-sm font-semibold pl-2"
                    />
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Suggested for this repository</h2>
                    <div className="mt-4">
                        <SuggestionCard />
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="text-xl font-semibold">Deployment</h2>
                    <div className="mt-4 grid grid-cols-4 gap-5">
                        {Deployments.map((deployment, id) => (
                            <ActionsCard
                                key={id}
                                title={deployment.title}
                                author={deployment.author}
                                img={`/images/repository/providers/${id + 1}.svg`}
                                description={deployment.description}
                                action={'Deployment'}
                                color={'#3695E3'}
                            />
                        ))}
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="text-xl font-semibold">Security</h2>
                    <div className="mt-4 grid grid-cols-4 gap-5">
                        {Security.map((deployment, id) => (
                            <ActionsCard
                                key={id}
                                title={deployment.title}
                                author={deployment.author}
                                img={`/images/repository/security/${id + 1}.svg`}
                                description={deployment.description}
                                action={'Code scanning'}
                                color={'#3695E3'}
                            />
                        ))}
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="text-xl font-semibold">Continuous Integration</h2>
                    <div className="mt-4 grid grid-cols-4 gap-5">
                        {Intgrations.map((deployment, id) => (
                            <ActionsCard
                                key={id}
                                title={deployment.title}
                                author={deployment.author}
                                img={`/images/repository/integration/${id + 1}.svg`}
                                description={deployment.description}
                                action={deployment.action}
                                color={deployment.color}
                            />
                        ))}
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="text-xl font-semibold">Automation</h2>
                    <div className="mt-4 grid grid-cols-4 gap-5">
                        {Automations.map((deployment, id) => (
                            <ActionsCard
                                key={id}
                                title={deployment.title}
                                author={deployment.author}
                                img={`/images/repository/automation/${id + 1}.svg`}
                                description={deployment.description}
                                action={'Automation'}
                                color={'#F97583'}
                            />
                        ))}
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="text-xl font-semibold">Pages</h2>
                    <div className="mt-4 grid grid-cols-4 gap-5">
                        {Pages.map((deployment, id) => (
                            <ActionsCard
                                key={id}
                                title={deployment.title}
                                author={deployment.author}
                                img={`/images/repository/pages/${id + 1}.svg`}
                                description={deployment.description}
                            />
                        ))}
                    </div>
                </div>
                <div className="mt-10 border-b pb-10 dark:border-zinc-700 border-zinc-300 flex justify-between gap-20">
                    <div className="flex flex-col gap-2 w-[288px]">
                        <h2 className="text-xl font-bold">Browse all categories</h2>
                        <p className="text-sm text-[#4493F8] hover:underline cursor-pointer">Deployment</p>
                        <p className="text-sm text-[#4493F8] hover:underline cursor-pointer">Security</p>
                        <p className="text-sm text-[#4493F8] hover:underline cursor-pointer">Continuous integration</p>
                        <p className="text-sm text-[#4493F8] hover:underline cursor-pointer">Automation</p>
                        <p className="text-sm text-[#4493F8] hover:underline cursor-pointer">Pages</p>
                    </div>
                    <div className="dark:border-zinc-700 rounded-md w-full border border-zinc-300 relative flex justify-between">
                        <div className="flex flex-col gap-3 p-6">
                            <h2 className="text-xl font-bold">{"Didn't find what you're looking for?"}</h2>
                            <p className="text-zinc-500 text-sm">Fill out a 2-minute survey to request a new workflow template for GitHub Actions.</p>
                            <button className="px-7 py-2 text-sm font-semibold bg-zinc-300 dark:bg-[#292E36] hover:opacity-90 dark:text-white w-fit rounded-md">Request</button>
                        </div>
                        <div className="h-full hidden dark:block">
                            <img src="/images/repository/cardSetting.png" alt="" className="rounded-l-3xl" />
                        </div>
                        <button className="dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-700 absolute top-3 right-3 p-1 rounded-md"><IoClose size={20} /></button>
                    </div>
                </div>
                <div className="mt-10 flex flex-col gap-8">
                    <div className="flex justify-center items-center">
                        <h2 className="text-2xl font-semibold">Learn more about GitHub Actions</h2>
                    </div>
                    <div className="grid grid-cols-3">
                        {GithubAction.map((action, id) => (
                            <GithubActions key={id} title={action.title} description={action.description} img={`/images/repository/githubActions/${id + 1}.svg`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Actions