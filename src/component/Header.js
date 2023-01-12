import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { spacing } from "../theme/spacing";
import { colors } from "../theme/color";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View>
          <Text style={styles.text}>বান্দরবান হেল্পলাইন</Text>
          <Text style={styles.text}>জরুরী সবাই সিয়োজিত</Text>
        </View>
        <View style={styles.callText}>
          <FontAwesome
            name="phone-square"
            size={30}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>জররী কল: 999</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing[5],
    backgroundColor: colors.green,
    flexDirection: "row",
    alignItems: "center",
    height: 100,
    borderBottomWidth: 0.5,
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
  },
  text: {
    color: colors.black,
    fontWeight: "bold",
  },
  main: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  callText: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginBottom: 10,
    marginRight: 10,
  },
});
