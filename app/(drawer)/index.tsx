import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoriesScreen from "../../screens/CategoriesScreen";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <StatusBar style="light" />
      <CategoriesScreen />
    </SafeAreaView>
  );
}

