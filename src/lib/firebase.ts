import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
/* type */
import { Shop } from "../types/shop";
import Constants from "expo-constants";
import { initialUser, User } from "../types/user";

if (firebase.apps.length === 0) {
    firebase.initializeApp(Constants.manifest!.extra!.firebase);
};

export const getShops = async () => {
    try{
        const snapshot = await firebase.firestore().collection("shops").orderBy("score", "desc").get();
        const shops = snapshot.docs.map((doc: { data: () => any; }) => doc.data() as Shop);
        return shops;
    } catch (err) {
        console.log(err);
        return [];
    }
};

export const signin = async () => {
    const userCredential = await firebase.auth().signInAnonymously();
    const { uid } = userCredential.user;
    const userDoc = await firebase.firestore().collection("users").doc(uid).get();
    if (!userDoc.exists) {
    await firebase.firestore().collection("users").doc(uid).set(initialUser);
    return {
    ...initialUser,
    id: uid,
    } as User;
    } else {
        return {
            id: uid,
            ...userDoc.data(),
        } as User;
    }
};
