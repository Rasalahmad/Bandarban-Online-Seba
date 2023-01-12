import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../component/Header";
import { colors } from "../../theme/color";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
