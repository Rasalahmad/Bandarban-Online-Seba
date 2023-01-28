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

export default function Journalist({ route }) {
  const data = route.params.details;
  const Item = ({ item }) => {
    return (
      <View style={styles.main}>
        <View style={styles.primary}>
          <View style={styles.secondary}>
            <Image source={{ uri: item.img }} style={styles.thumbnail} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.text}>{item.designation}</Text>
              <Text style={styles.text}>{item.paper}</Text>
              <Text style={styles.text}>{item.phone}</Text>
            </View>
          </View>
          <View style={styles.icons}>
            <FontAwesome
              name="whatsapp"
              size={34}
              color="green"
              onPress={() => Linking.openURL(`tel:${item.phone}`)}
            />
            <MaterialIcons
              name="message"
              size={34}
              color="green"
              onPress={() => Linking.openURL(`sms:${item.phone}`)}
            />
          </View>
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
    borderBottomWidth: 1,
    borderBottomColor: "green",
    height: 140,
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
  secondary: {
    flex: 0.9,
    flexDirection: "row",
  },
  textContainer: {
    paddingHorizontal: spacing[5],
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  primary: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icons: {
    flex: 0.1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginRight: 15,
  },
});
