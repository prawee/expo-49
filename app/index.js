import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Button } from "react-native";

const Page = () => {
    const router = useRouter()
    return (
        <View>
            <Button onPress={() => router.push("/register")} title="Open Register" />
            <Text>Hello world</Text>
        </View>
    );
}

export default Page;