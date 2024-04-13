import { FaBalanceScale, FaCompactDisc } from "react-icons/fa";
import { LuShieldAlert } from "react-icons/lu";
import { LiaRobotSolid } from "react-icons/lia";
import { BsCodeSquare, BsKey } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

const Security = () => {
    const Rules = [
        {
            title: 'Security policy',
            enabled: false,
            description: 'Define how users should report security vulnerabilities for this repository',
            button: 'Set up security policy',
            isButton: true
        },
        {
            title: 'Security advisories',
            enabled: true,
            description: 'View or disclose security advisories for this repository',
            button: 'View security advisories'
        },
        {
            title: 'Private vulnerability reporting',
            enabled: false,
            description: 'Allow users to privately report potential security vulnerabilities',
            button: 'Enable vulnerability reporting',
            isButton: true
        },
        {
            title: 'Dependabot alerts',
            enabled: false,
            description: 'Get notified when one of your dependencies has a vulnerability',
            button: 'Enable Dependabot alerts',
            isButton: true
        },
        {
            title: 'Code scanning alerts',
            enabled: 'Needs setup',
            description: 'Automatically detect common vulnerability and coding errors',
            button: 'Set up code scanning',
            isButton: true
        },
        {
            title: 'Security advisories',
            enabled: true,
            description: 'Get notified when a secret is pushed to this repository',
            button: 'View detected secrets'
        },
    ]
    return (
        <div className='pt-[24px] px-[162px] grid grid-cols-4'>
            <div className="col-span-1">
                <div className="border-b pb-2 dark:border-zinc-700 border-zinc-300">
                    <div className="border-l-2 border-[#1F6FEB] pl-1 bg-zinc-300 rounded-r-md dark:bg-gray-800 mr-3 flex gap-2 items-center p-2">
                        <FaCompactDisc className="text-zinc-500" size={20} />
                        <h2 className="text-sm font-semibold dark:text-white">Overview</h2>
                    </div>
                </div>
                <div className="flex gap-2 flex-col border-b pb-2 pl-2 dark:border-zinc-700 border-zinc-300 mt-3">
                    <h3 className="text-xs text-zinc-500 font-bold">Reporting</h3>
                    <div className="pl-1 mr-3 flex gap-2 items-center p-1">
                        <FaBalanceScale className="text-zinc-500" size={20} />
                        <h2 className="dark:text-zinc-300 text-zinc-700">Policy</h2>
                    </div>
                    <div className="pl-1 mr-3 flex gap-2 items-center p-1">
                        <LuShieldAlert className="text-zinc-500" size={20} />
                        <h2 className="dark:text-zinc-300 text-zinc-700">Advisories</h2>
                    </div>
                </div>
                <div className="flex gap-2 flex-col border-b pb-2 pl-2 dark:border-zinc-700 border-zinc-300 mt-3">
                    <h3 className="text-xs text-zinc-500 font-bold">Vulnerability alerts</h3>
                    <div className="pl-1 mr-3 flex gap-2 items-center p-1">
                        <LiaRobotSolid className="text-zinc-500" size={20} />
                        <h2 className="dark:text-zinc-300 text-zinc-700">Dependabot</h2>
                    </div>
                    <div className="pl-1 mr-3 flex gap-2 items-center p-1">
                        <BsCodeSquare className="text-zinc-500" size={20} />
                        <h2 className="dark:text-zinc-300 text-zinc-700">Code scanning</h2>
                    </div>
                    <div className="pl-1 mr-3 flex gap-2 items-center p-1">
                        <BsKey className="text-zinc-500" size={20} />
                        <h2 className="dark:text-zinc-300 text-zinc-700">Secret scanning</h2>
                    </div>
                </div>
            </div>
            <div className="ml-4 col-span-3 dark:text-zinc-100 text-zinc-900">
                <h2 className="text-2xl font-normal dark:text-white">Security overview</h2>
                <div className="w-full border border-zinc-300 dark:border-zinc-700 mt-4 rounded-md">
                    {Rules.map((rule, id) => (
                        <div key={id} className="border-b p-3 items-center dark:border-zinc-700 border-zinc-300 flex justify-between">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1">
                                    <h2 className="font-semibold">{rule.title}</h2>
                                    <GoDotFill size={6} />
                                    <p className={`${rule.enabled ? (rule.enabled === 'Needs setup' ? 'dark:text-zinc-400 text-zinc-600' : 'text-[#3FB950]') : 'dark:text-zinc-400 text-zinc-600'} font-semibold text-sm`}>{rule.enabled ? (rule.enabled === 'Needs setup' ? 'Needs setup' : 'Enabled') : 'Disabled'}</p>
                                </div>
                                <p className="text-zinc-500">{rule.description}</p>
                            </div>
                            <div>
                                <button className={`p-2 ${rule.isButton ? 'bg-zinc-300 dark:bg-zinc-700 font-semibold rounded-md' : 'text-[#4493F8] hover:underline'} text-xs `}>{rule.button}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Security