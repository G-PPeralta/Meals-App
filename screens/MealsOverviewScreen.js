import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealItem from "../components/MealItem";

function MealsOverviewScreen({ navigation, route }) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  // Set the title of the screen to the category title
  // when the screen is loaded
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation])

  function renderMealItem(itemData) {

    const mealItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    }

    return <MealItem
      {...mealItemProps}
      onPress={() => navigation.navigate('MealDetails', {
        mealId: itemData.item.id
      })}
    />
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});