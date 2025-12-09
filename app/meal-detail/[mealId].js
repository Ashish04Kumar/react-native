import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MEALS } from "../../data/dummy-data";

export default function MealDetail() {
  const { mealId } = useLocalSearchParams();
  const navigation = useNavigation();

  const meal = MEALS.find((m) => m.id === mealId);

  function headerBtnPressHandler() {
    console.log("pressed");
  }

  useLayoutEffect(() => {
    if (meal) {
      navigation.setOptions({
        title: meal.title,

        headerRight: () => (
          <Pressable
            style={{ marginRight: 12 }}
            onPress={headerBtnPressHandler}
          >
            <Ionicons name="bookmark-outline" size={24} color="#fff" />
          </Pressable>
        ),
      });
    }
  }, [meal, headerBtnPressHandler]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />

        <Text style={styles.title}>{meal.title}</Text>

        <Text style={styles.meta}>
          {meal.affordability.toUpperCase()} · {meal.complexity.toUpperCase()} ·{" "}
          {meal.duration}m
        </Text>

        <Text style={styles.section}>Ingredients</Text>
        {meal.ingredients.map((ing, idx) => (
          <Text key={idx} style={styles.item}>
            {ing}
          </Text>
        ))}

        <Text style={styles.section}>Steps</Text>
        {meal.steps.map((step, idx) => (
          <Text key={idx} style={styles.item}>
            {step}
          </Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 14 },
  image: { width: "100%", height: 250, borderRadius: 10 },
  title: { fontSize: 28, fontWeight: "800", marginVertical: 12 },
  meta: { fontSize: 15, color: "#666", marginBottom: 20 },
  section: { fontSize: 20, fontWeight: "700", marginTop: 20 },
  item: { fontSize: 16, marginVertical: 4 },
});
