import { Stack } from "expo-router";
import { SafeAreaView, Platform, StatusBar } from "react-native";


export default function Layout() {

    return (
        <SafeAreaView
            style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
            <StatusBar
                backgroundColor={"#d97706"}
            />
            <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaView>
    );
}
