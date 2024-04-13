import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loader from "../Components/Loader/Loader"

import HomeBody from "../Components/Body/HomeBody";

export default function Home() {
    const [user, loading] = useAuthState(auth);
    const [stateLoading, setStateLoading] = useState(true);
    const navigate = useNavigate();

    setTimeout(() => {
        setStateLoading(false);
    }, 1000);

    useEffect(() => {
        if (!loading) {
            if (user) {
                navigate('/dashboard');
            }
        }
    }, [loading, navigate, user])

    return (
        <>
            {(loading || user || stateLoading) ?
                <Loader />
                :
                <HomeBody />
            }
        </>
    );
}
