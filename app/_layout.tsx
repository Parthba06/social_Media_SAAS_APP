import { Stack } from "expo-router";
import { AuthProvider } from "../contexts/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="welcome" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="home" />
        <Stack.Screen name="features" />
        <Stack.Screen name="connect-accounts" />
        <Stack.Screen name="dashboard" />
        <Stack.Screen name="ai-suggestions" />
        <Stack.Screen name="optimizer" />
        <Stack.Screen name="scheduler" />
        <Stack.Screen name="analytics" />
        <Stack.Screen name="trends" />
        <Stack.Screen name="settings" />
      </Stack>
    </AuthProvider>
  );
}
