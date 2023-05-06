import { useLayoutEffect } from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealsList from "../components/MealsList/MealsList";

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

  return <MealsList items={displayedMeals} navigation={navigation} />
}

export default MealsOverviewScreen;

