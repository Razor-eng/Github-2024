import Loader from "../Components/Loader/Loader";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, getRepo, getRepoByLocation } from "../Api/FirestoreApi";
import { useLocation } from 'react-router-dom'
import RepositoryBody from "../Components/Body/RepositoryBody";

const Repository = () => {
    const [user, loading] = useAuthState(auth);
    const [stateLoading, setStateLoading] = useState(true);
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState([])
    const [repo, setRepo] = useState([]);
    const location = useLocation();

    useEffect(() => {
        if (location.state?.id) {
            getRepo(location.state?.id, setRepo);
        } else {
            getRepoByLocation(location.pathname.split('/')[1], setRepo)
        }
    }, [location])

    setTimeout(() => {
        setStateLoading(false);
    }, 1000);

    useEffect(() => {
        if (!loading) {
            if (!user) {
                navigate('/');
            }
            if (user) {
                getCurrentUser(user.email, setCurrentUser);
            }
        }
    }, [loading, navigate, user])

    return (
        <>
            {(loading || !user || stateLoading) ?
                <Loader />
                :
                (
                    repo === undefined ?
                        <div className="w-full h-screen flex flex-col gap-3 justify-center items-center">
                            <h2 className="dark:text-white text-3xl">Page Not Found...</h2>
                            <Link to={'/dashboard'} className="cursor-pointer dark:text-zinc-300 dark:bg-zinc-800 p-3 hover:opacity-90 rounded-lg">Go Home</Link>
                        </div>
                        :
                        <RepositoryBody currentuser={currentUser} repo={repo} />
                )
            }
        </>
    )
}

export default Repository