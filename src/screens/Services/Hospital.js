import {
  FlatList,
  Image,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { spacing } from "../../theme/spacing";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../theme/color";

export default function Hospital({ route }) {
  const data = route.params.details;
  const Item = ({ item }) => {
    return (
      <View style={styles.main}>
        <View style={styles.secondary}>
          <View style={{ flex: 0.9 }}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.number}>{item.phone}</Text>
          </View>
          <FontAwesome
            style={styles.icon}
            name="whatsapp"
            size={40}
            color="green"
            onPress={() => Linking.openURL(`tel:${item.phone}`)}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.contaienr}>
      <FlatList
        key={"_"}
        data={data}
        numColumns={1}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contaienr: {
    backgroundColor: "white",
    flex: 1,
  },
  main: {
    padding: spacing[3],
    margin: spacing[3],
    backgroundColor: "#d4d4d4",
    borderRadius: 10,
  },
  itemName: {
    fontSize: 20,
  },
  secondary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
    flex: 0.1,
  },
  location: {
    color: colors.purple,
  },
  number: {
    color: "red",
  },
});
