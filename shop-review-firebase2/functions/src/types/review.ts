import firebase from "firebase";
import 'firebase/firestore';

type UserRef = {
    id: string;
    name: string;
};

type ShopRef = {
    id: string;
    name: string;
};

export type Review = {
    id?: string;
    text: string;
    score: number;
    score1?: number;
    score2?: number;
    score3?: number;
    score4?: number;
    score5?: number;
    imageUrl?: string;
    user: UserRef;
    shop: ShopRef;
    updatedAt: firebase.firestore.Timestamp;
    createdAt: firebase.firestore.Timestamp;
};
