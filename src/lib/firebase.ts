import firebase from "firebase/app";
import "firebase/firestore";
/* type */
import { Shop } from "../types/shop";
import Constants from "expo-constants"

if (firebase.apps.length === 0) {
    firebase.initializeApp(Constants.manifest!.extra!.firebase);
};

export const getShops = async () => {
const snapshot = await firebase.firestore().collection("shops").orderBy("score", "desc").get();
const shops = snapshot.docs.map((doc: { data: () => any; }) => doc.data() as Shop);
return shops;
};
