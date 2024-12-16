import React from "react";
import { Provider as PaperProvider } from "react-native-paper"; // Import the PaperProvider
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <PaperProvider> {/* Wrap your root component with PaperProvider */}
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="Reservation" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
};

export default RootLayout;
