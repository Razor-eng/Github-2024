import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { SignInApi } from "../../Api/AuthApi";

const SignInBody = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const isValidEmail = () => {
        let emailValidate = email.match(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/);
        if (emailValidate) {
            setValidEmail(true)
        } else {
            setValidEmail(false)
        }
    }

    const isValidPassword = () => {
        if (password.length > 8) {
            setValidPassword(true)
        } else {
            setValidPassword(false)
        }
    }

    const signIn = () => {
        SignInApi(email, password);
    }

    useEffect(() => {
        email && isValidEmail()
        password && isValidPassword()
    }, [email, password])

    return (
        <div className="w-screen h-screen">
            <div className="flex flex-col items-center">
                <div className="mt-10 flex flex-col items-center gap-6">
                    <Link to="/">
                        <svg aria-hidden="true" fill='currentColor' viewBox="0 0 16 16" version="1.1" height="50" width="50" data-view-component="true" className=" text-white">
                            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                        </svg>
                    </Link>
                    <h2 className="text-2xl font-thin text-white">Sign in to GitHub</h2>
                </div>
                <div className="bg-[#161B22] text-sm text-[#E6EDF3] p-4 py-6 rounded-lg mt-5 w-72">
                    <div className="flex flex-col gap-2 w-full">
                        <label className="font-thin">Username or email address</label>
                        <input
                            type="email"
                            className="bg-[#0D1117] border border-[#2F353C] rounded-lg p-2 w-full outline-none focus:outline-[#2665BF]"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full mt-5">
                        <div className="flex justify-between">
                            <label className="font-thin">Password</label>
                            <p className="text-xs text-[#2F81F7] cursor-pointer">Forgot Password?</p>
                        </div>
                        <input
                            type="password"
                            className="bg-[#0D1117] border border-[#2F353C] rounded-lg p-2 w-full outline-none focus:outline-[#2665BF]"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="w-full mt-4 flex justify-center">
                        <button
                            className={`bg-[#238636] rounded-lg disabled:bg-[#114029] transition-all duration-300 ease-in-out p-2 font-semibold w-full hover:disabled:opacity-100 disabled:cursor-auto hover:opacity-90 cursor-pointer`}
                            onClick={signIn}
                            disabled={!validEmail || !validPassword}
                        >
                            Sign in
                        </button>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                        <div className="w-full border border-zinc-700"></div>
                        <h2>Or</h2>
                        <div className="w-full border border-zinc-700"></div>
                    </div>
                    <div className="bg-[#21262D] text-[#C9D1D9] font-semibold rounded-md cursor-pointer border border-[#30363D] w-full justify-center flex mt-4 hover:opacity-90">
                        <button className="p-2">Sign in with a passkey</button>
                    </div>
                </div>
                <div className="flex mt-5 bg-[#0D1117] w-w-72 border-2 px-8 py-5 rounded-md border-[#30363D]">
                    <h2 className="text-white font-light">New to Github? <Link to={'/signup'} className="cursor-pointer hover:underline text-sm text-[#2F81F7]">Create an account</Link></h2>
                </div>
                <div className="flex gap-1 mt-20">
                    <ul className='flex text-xs items-center mb-4 sm:mb-0 text-[#6E7781] flex-wrap gap-1' >
                        <li className='mr-3 hover:underline hover:text-[#0969DA]'><a href="">Terms</a></li>
                        <li className='mr-3 hover:underline hover:text-[#0969DA]'><a href="">Privacy</a></li>
                        <li className='mr-3 hover:underline hover:text-[#0969DA]'><a href="">Docs</a></li>
                        <li className='mr-3 hover:underline hover:text-[#0969DA]'><a href="">Contact</a></li>
                        <li className='mr-3 hover:underline hover:text-[#0969DA]'><a href="">GitHub Support</a></li>
                        <li className='mr-3 hover:underline hover:text-[#0969DA]'><a href="">Manage Cookies</a></li>
                        <li className='mr-3 hover:underline hover:text-[#0969DA]'><a href="">Do not share my personal information</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SignInBody