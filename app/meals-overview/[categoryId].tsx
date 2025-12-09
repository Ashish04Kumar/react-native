import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useLayoutEffect } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CATEGORIES, MEALS } from "../../data/dummy-data";

export default function MealsOverview() {
  const { categoryId } = useLocalSearchParams();
    const navigation = useNavigation();

  const router = useRouter();
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    if (selectedCategory) {
      navigation.setOptions({
        title: selectedCategory.title,
      });
    }
  }, [selectedCategory]);
  const renderMealItem = ({ item }) => {
    return (
      <Pressable
        style={({ pressed }) => [styles.mealItem, pressed && styles.pressed]}
        onPress={() => router.push(`/meal-detail/${item.id}`)}
      >
        <Image source={{ uri: item.imageUrl }} style={styles.image} />

        <View style={styles.infoBox}>
          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.subtitle}>
            {item.affordability.toUpperCase()} · {item.complexity.toUpperCase()}{" "}
            · {item.duration}m
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>

      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },

  mealItem: {
    marginVertical: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
  },

  image: {
    width: "100%",
    height: 200,
  },

  infoBox: {
    padding: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },

  subtitle: {
    marginTop: 6,
    color: "#666",
    fontSize: 14,
  },
  pressed: {
    opacity: 0.8,
  },
});
