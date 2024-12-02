import { Stack } from "expo-router";
import React from "react";

const RootLayout =() => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }}/>
            <Stack.Screen name="SignIn" options={{ headerShown: false }}/>
            <Stack.Screen name="SignUp" options={{ headerShown: false }}/>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>




        </Stack>
    )
}

export default RootLayout