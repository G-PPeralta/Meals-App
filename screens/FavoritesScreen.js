import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

import MealsList from "../components/MealsList/MealsList";

function FavoritesScreen() {
  const { ids } = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
      </View>
    );
  }

  return (
    <MealsList items={favoriteMeals} />
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ccc",
  }
});
