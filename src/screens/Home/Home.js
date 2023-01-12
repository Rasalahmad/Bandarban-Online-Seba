import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../component/Header";
import { colors } from "../../theme/color";
import Slider from "../../component/Slider";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Slider />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
