import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

function IconButton({ onPress, icon, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons
        name={icon}
        size={24}
        color={color}
        style={styles.icon}
      />
    </Pressable>
  )
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 18,
  }
});
