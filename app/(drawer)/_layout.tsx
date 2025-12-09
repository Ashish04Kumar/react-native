import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: "#1e293b" }, // Top header bg
        headerTintColor: "#fff", // Top header text
        drawerActiveTintColor: "#1e293b", // Selected item text
        drawerInactiveTintColor: "#334155", // Normal text
        drawerActiveBackgroundColor: "#cbd5e1", // Selected item bg
        drawerStyle: {
          backgroundColor: "#f8fafc", // Drawer menu bg
          width: 260,
        },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{ drawerLabel: "Home" }}
      />
      <Drawer.Screen
        name="favourites"
        options={{ drawerLabel: "Favourites" }}
      />
    </Drawer>
  );
}
