import { useRouter } from "expo-router";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";



 
function CategoriesScreen() {
  const router = useRouter();
  const renderCategoryItem = (itemData) => {

  const pressHandler =() => {
        router.push(`/meals-overview/${itemData.item.id}`);

  }

  return (
    <CategoryGridTile onPress={pressHandler} title={itemData.item.title} color={itemData.item.color} />
  );
};

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
