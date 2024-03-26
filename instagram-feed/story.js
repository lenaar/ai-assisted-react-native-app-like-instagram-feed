import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Story({ avatar, name, isCreateStory = false, isSeen }) {
  return (
    <TouchableOpacity style={styles.user}>
      <View>
        <View
          style={[
            styles.avatarBorder,
            {
              borderColor: isCreateStory
                ? "transparent"
                : isSeen
                ? "rgba(0,0,0,.0975)"
                : "#c73191",
            },
          ]}
        >
          <Image source={avatar} style={styles.avatar} />
          {isCreateStory && (
            <View style={styles.plusIcon}>
              <Feather name="plus" size={12} color="white" />
            </View>
          )}
        </View>
        <Text style={styles.names} numberOfLines={1}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  user: {
    width: 70, // Adjust as needed
    paddingHorizontal: 10, // Space on the sides
  },
  avatarBorder: {
    width: 64, // Diameter of the avatar border
    height: 64, // Height equals the width for a circle
    borderRadius: 32, // Half of the width/height to make it a circle
    borderWidth: 2, // Width of the border
    borderColor: "#ff385c", // Instagram-like pinkish color for border
    margin: 5, // Margin around the avatar
    alignItems: "center", // Center the avatar horizontally
    justifyContent: "center", // Center the avatar vertically
  },
  avatar: {
    width: 60, // Diameter of the avatar itself
    height: 60, // Height equals the width for a circle
    borderRadius: 30, // Half of the width/height to make it a circle
  },
  plusIcon: {
    position: "absolute", // Positioning relative to its parent
    bottom: 0, // Align at the bottom of the parent
    right: 0, // Align to the right of the parent
    width: 20, // Width of the plus icon
    height: 20, // Height of the plus icon
    borderRadius: 10, // To make it a circle
    backgroundColor: "#ff385c", // Instagram-like pinkish color for icon
    overflow: "hidden", // To ensure the icon doesn't overflow its bounds
    alignItems: "center", // Center the icon content horizontally
    justifyContent: "center", // Center the icon content vertically
  },
  names: {
    textAlign: "center", // Center the name text
    fontSize: 14, // Font size for the names
    lineHeight: 18, // Line height for the names
    color: "#262626", // Instagram-like dark gray color
    maxWidth: 80, // Maximum width for names, to ensure they don't overflow
    marginTop: 2, // Space between the avatar and the name
  },
});
