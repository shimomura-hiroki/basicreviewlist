import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
/* lib */
import { getShops } from "../lib/firebase";
/* components */
import { ShopReviewItem } from "../components/ShopReviewItem";
/* types */
import { Shop } from "../types/shop";

export const HomeScreen = () => {
    const [shops, setShops] = useState<Shop[]>([]);
    useEffect(() => {
    getFirebaseItems();
    }, []);

    const getFirebaseItems = async () => {
    const shops = await getShops()
    setShops(shops);
    };

    const shopItems = shops.map((shop, index) => (
    <ShopReviewItem shop={shop} key={index.toString()} onPress={function (): void {
        throw new Error("Function not implemented.");
    } } />
    ));

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
            data={shops}
            renderItem={({ item }: { item: Shop }) => (
                <ShopReviewItem shop={item} onPress={function (): void {
                throw new Error("Function not implemented.");
                } } />
            )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
