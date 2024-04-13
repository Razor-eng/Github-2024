import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { toast } from 'react-hot-toast'
import { auth } from '../firebase';
import { setUser } from './FirestoreApi';

export const SignInApi = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password).then(() => {
            toast.success('Logged in Successfully');
        })
    } catch (error) {
        toast.error('Invalid Email or Password')
    }
}

export const RegisterApi = async (user, password) => {
    try {
        await createUserWithEmailAndPassword(auth, user.email, password).then(() => {
            setUser(user);
            toast.success('User created Successfully');
        })
    } catch (error) {
        toast.error('Email is already in use!')
    }
}

export const Logout = async () => {
    try {
        await signOut(auth).then(() => {
            toast.success('Logged Out');
        });
    } catch (error) {
        toast.error(error.message)
    }
}