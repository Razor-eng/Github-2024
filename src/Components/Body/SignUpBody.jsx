import { useEffect, useState } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RegisterApi } from "../../Api/AuthApi";
import { isEmailExist } from "../../Api/FirestoreApi";

const SignUpBody = () => {
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validUsername, setValidUsername] = useState(false)
    const [getPassword, setGetPassword] = useState(false);
    const [getUsername, setGetUsername] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const signup = () => {
        let user = {
            email: email,
            name: username,
            photo: null
        };
        RegisterApi(user, password);
    }

    const isEmailAvailable = () => {
        isEmailExist(email, setValidEmail);
    }

    const isValidPassword = () => {
        if (password.length >= 8) {
            setValidPassword(true)
        } else {
            setValidPassword(false)
        }
    }

    const isValidUsername = () => {
        if (username.length >= 5) {
            setValidUsername(true)
        } else {
            setValidUsername(false)
        }
    }

    useEffect(() => {
        let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        if (regex.test(email)) {
            isEmailAvailable();
        } else {
            setValidEmail(false);
        }
        if (password) {
            isValidPassword();
        }
        if (username) {
            isValidUsername();
        }
    }, [email, password, username])

    return (
        <div className="w-screen h-screen bg-gradient-to-br from-[#032150] via-[#040D21] to-[#371C42] text-[#8193B2]">
            <div className='flex justify-between items-center p-4 px-36'>
                <Link to={'/'} className='' >
                    <svg height="32" aria-hidden="true" fill='currentColor' viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className=" text-white">
                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg>
                </Link>
                <div className="flex gap-3 text-[17px] tracking-wide">
                    Already have an account?
                    <Link to={'/signin'} className="text-white flex items-center cursor-pointer hover:underline">
                        Sign in
                        <MdOutlineArrowRightAlt size={16} />
                    </Link>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-[#0C162D] w-[600px] mt-24 border border-zinc-800 rounded-md">
                        <div className="flex flex-col gap-2 text-[15px] font-semibold p-6 tracking-wider">
                            <div>
                                <h2>Welcome to GitHub!</h2>
                                <h2>{"Let's"} begin the adventure</h2>
                            </div>
                            <h2 className="text-[#00CFC8] font-bold mt-4">
                                {(!getPassword) && 'Enter your email*'}
                                {(getPassword && !getUsername) && 'Enter your password*'}
                                {(getUsername) && 'Enter your username*'}
                            </h2>
                            <div className="flex items-center">
                                {!getPassword ?
                                    <MdOutlineArrowRightAlt color="#EA4AAA" size={20} />
                                    :
                                    <FaCheck color="#20BB3D" size={18} />
                                }
                                <input
                                    type="email"
                                    className="px-4 py-1 w-full mx-3 rounded-md bg-transparent outline-none focus:outline-1 focus:outline-[#0969DA] text-white"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    disabled={getPassword}
                                />
                                {!getPassword &&
                                    <div className="tracking-wide">
                                        <button
                                            disabled={!validEmail}
                                            className={`bg-transparent border-2 rounded-md px-4 py-1 font-light transition-colors ease-in-out duration-300 ${validEmail ? 'text-[#20BB3D] border-[#20BB3D]' : 'text-[#8C959F] border-slate-600'}`}
                                            onClick={() => setGetPassword(true)}
                                        >
                                            Continue
                                        </button>
                                    </div>
                                }
                            </div>
                            <div className={`flex items-center ${getPassword ? 'opacity-100' : 'opacity-0'}`}>
                                {getPassword && (
                                    !validPassword ?
                                        <MdOutlineArrowRightAlt color="#EA4AAA" size={20} />
                                        :
                                        <FaCheck color="#20BB3D" size={20} />
                                )}
                                <input
                                    type="password"
                                    className="px-4 py-1 w-full mx-1 rounded-md bg-transparent outline-none focus:outline-1 focus:outline-[#0969DA] text-white"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    disabled={getUsername}
                                />
                                {(getPassword && !getUsername) &&
                                    <div className="tracking-wide">
                                        <button
                                            disabled={!validPassword}
                                            className={`bg-transparent border-2 rounded-md px-4 py-1 font-light transition-colors ease-in-out duration-300 ${validEmail ? 'text-[#20BB3D] border-[#20BB3D]' : 'text-[#8C959F] border-slate-600'}`}
                                            onClick={() => setGetUsername(true)}
                                        >
                                            Continue
                                        </button>
                                    </div>
                                }
                            </div>
                            <div className={`flex items-center ${getUsername ? 'opacity-100' : 'opacity-0'}`}>
                                {getUsername && (
                                    !validUsername ?
                                        <MdOutlineArrowRightAlt color="#EA4AAA" size={20} />
                                        :
                                        <FaCheck color="#20BB3D" size={20} />
                                )}
                                <input
                                    type="text"
                                    className="px-4 py-1 w-full mx-1 rounded-md bg-transparent outline-none focus:outline-1 focus:outline-[#0969DA] text-white"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                                {getUsername &&
                                    <div className="tracking-wide">
                                        <button
                                            disabled={!validUsername}
                                            className={`bg-transparent border-2 rounded-md px-4 py-1 font-light transition-colors ease-in-out duration-300 ${validUsername ? 'text-[#20BB3D] border-[#20BB3D]' : 'text-[#8C959F] border-slate-600'}`}
                                            onClick={signup}
                                        >
                                            Continue
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`w-[600px] mt-6 text-[#8193B2] ml-10 text-lg font-normal ${((!validEmail && email) || (!validPassword && password)) ? 'opacity-100' : 'opacity-0'} transition-opacity delay-1000 ease-out`}>
                        {
                            !getUsername ?
                                (getPassword ?
                                    <p className="justify-start">Enter a Strong Password (8-letters)</p>
                                    :
                                    <p className="justify-start">Email is invalid or already taken</p>
                                )
                                :
                                <p className="justify-start">Enter a Valid Username</p>
                        }
                    </div>
                    <div className="w-[600px] mt-36">
                        <p className="text-xs">By creating an account, you agree to the <span className="text-[#0969DA] cursor-pointer hover:underline">Terms of Service</span>. For more information about {"GitHub's"} privacy practices, see the <span className="text-[#0969DA] cursor-pointer hover:underline">GitHub Privacy Statement</span>. {"We'll"} occasionally send you account-related emails.</p>
                    </div>
                    <div className="flex gap-1 mt-32">
                        <Link to={'/'} className='' href="https://github.com">
                            <svg height="25" aria-hidden="true" fill='#6E7781' viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className=" text-white">
                                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                            </svg>
                        </Link>
                        <ul className='flex text-xs items-center mb-4 sm:mb-0 text-[#6E7781] flex-wrap gap-1' >
                            <li className='mr-3'>© 2024 GitHub, Inc.</li>
                            <li className='mr-3 hover:underline hover:text-[#0969DA]'><a href="">Terms</a></li>
                            <li className='mr-3 hover:underline hover:text-[#0969DA]'><a href="">Privacy</a></li>
                            <li className='mr-3 hover:underline hover:text-[#0969DA]'><a href="">Security</a></li>
                            <li className='mr-3 hover:underline hover:text-[#0969DA]'><a href="">Status</a></li>
                            <li className='mr-3 hover:underline hover:text-[#0969DA]'><a href="">Docs</a></li>
                            <li className='mr-3 hover:underline hover:text-[#0969DA]'><a href="">Contact</a></li>
                            <li className='mr-3 hover:underline hover:text-[#0969DA]'><a href="">Manage Cookies</a></li>
                            <li className='mr-3 hover:underline hover:text-[#0969DA]'><a href="">Do not share my personal information</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpBody