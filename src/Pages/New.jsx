import NewBody from "../Components/Body/NewBody";
import Loader from "../Components/Loader/Loader";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from "../Api/FirestoreApi";

const New = () => {
    const [user, loading] = useAuthState(auth);
    const [stateLoading, setStateLoading] = useState(true);
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState([])

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
                <NewBody currentUser={currentUser} />
            }
        </>
    )
}

export default New