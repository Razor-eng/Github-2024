import { addDoc, collection, doc, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { toast } from 'react-hot-toast'
import { firestore } from "../firebase";

let userRef = collection(firestore, 'users');
let repoRef = collection(firestore, 'repositories');

export const createRepo = (repoData) => {
    addDoc(repoRef, repoData)
        .then(() => {
            toast.success(repoData.name + ' Repository created Successfully');
        })
        .catch(err => {
            toast.error(err);
        })
}

export const getRepo = async (id, setRepo) => {
    onSnapshot(repoRef, (res) => {
        setRepo(res.docs.map((doc) => {
            return { ...doc.data() }
        }).filter((item) => {
            return item.repoId === id
        })[0]);
    });
}

export const getRepoByLocation = async (location, setRepo) => {
    onSnapshot(repoRef, (res) => {
        setRepo(res.docs.map((doc) => {
            return { ...doc.data() }
        }).filter((item) => {
            return item.name === location
        })[0]);
    });
}

export const getUserRepos = (setRepos, userEmail) => {
    onSnapshot(repoRef, (res) => {
        setRepos(
            res.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            }).filter(item => {
                return item.email === userEmail
            })
        )
    })
}

export const setUser = async (userData) => {
    const q = query(userRef, where("email", "==", userData?.email));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
        addDoc(userRef, userData);
    }
}

export const isEmailExist = async (email, setValidEmail) => {
    const q = query(userRef, where("email", "==", email));
    const docs = await getDocs(q);
    if (docs.docs.length !== 0) {
        setValidEmail(false);
    } else {
        setValidEmail(true)
    }
}

export const getCurrentUser = (userEmail, setCurentUser) => {
    onSnapshot(userRef, (res) => {
        setCurentUser(res.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
        }).filter((item) => {
            return item.email === userEmail
        })[0]);
    });
}

export const updateCurrentUserPicture = (id, imageURL) => {
    let updateRef = doc(userRef, id);

    updateDoc(updateRef, {
        photo: imageURL
    }).then(() => {
        toast.success('Image uploaded Successfully');
    }).catch(err => {
        toast.error(err.message);
    });
}