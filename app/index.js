import { Link, useRouter } from "expo-router";
import React from "react";
import { View, Text, Button } from "react-native";

const Page = () => {
    const router = useRouter()
    return (
        <View>
            <Button onPress={() => router.push("/register")} title="Open Register" />
            <Link href={'/register'} asChild>
                <Button title="Open Register with link" />
            </Link>
            <Text>Hello world</Text>
        </View>
    );
}

export default Page;