import {
  FlatList,
  Dimensions,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import React from "react";
import { spacing } from "../../theme/spacing";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../theme/color";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;

export default function Category({ route }) {
  const navigation = useNavigation();
  const data = route.params.details;
  const Item = ({ item }) => {
    console.log("item", item);
    return (
      <Pressable
        style={styles.main}
        onPress={() =>
          navigation.navigate("Doctors", { item: item, heading: item?.title })
        }
      >
        <View style={styles.box}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.contaienr}>
      <Text style={styles.h_text}>আমাদের সমূহ...</Text>
      <FlatList
        key={"_"}
        data={data}
        numColumns={3}
        style={styles.list}
        keyExtractor={(item) => item?.catId}
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
    height: 80,
    width: windowWidth / 3.28,
    backgroundColor: "#d4d4d4",
    marginHorizontal: 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  box: {
    display: "flex",
    marginHorizontal: 0,
  },
  text: {
    fontSize: 20,
  },
  h_text: {
    fontSize: 20,
    paddingHorizontal: spacing[4],
    paddingTop: spacing[3],
    marginVertical: 15,
    backgroundColor: colors.orange,
  },
});
