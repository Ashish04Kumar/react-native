import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "#1e293b" }, // header bg
        headerTintColor: "#fff", // header text color
        headerTitleStyle: { fontWeight: "600" },
        contentStyle: { backgroundColor: "#f1f5f9" }, // screen background
      }}
    />
  );
}
