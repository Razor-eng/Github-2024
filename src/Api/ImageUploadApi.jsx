import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { storage } from "../firebase";
import { updateCurrentUserPicture } from "./FirestoreApi";

export const uploadImage = (file, user) => {
    const profilePicRef = ref(storage, `files/${file.name}`);
    const uploadProfileImage = uploadBytesResumable(profilePicRef, file);

    uploadProfileImage.on('state_changed', () => {

    }, (error) => {
        console.log(error);
    }, () => {
        getDownloadURL(uploadProfileImage.snapshot.ref).then(res => {
            updateCurrentUserPicture(user, res)
        })
    })
}