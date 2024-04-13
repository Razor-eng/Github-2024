import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loader from "../Components/Loader/Loader"
import DashboardBody from "../Components/Body/DashboardBody";
import { getCurrentUser, getUserRepos } from "../Api/FirestoreApi";
import ProfileBody from "../Components/Body/ProfileBody";

const Profile = () => {
    const [user, loading] = useAuthState(auth);
    const [stateLoading, setStateLoading] = useState(true);
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState([])
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        if (!loading) {
            if (user) {
                getUserRepos(setRepos, currentUser?.email);
            }
        }
    }, [currentUser?.email, loading, user])

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
                <ProfileBody currentUser={currentUser} repos={repos} />
            }
        </>
    )
}


export default Profile