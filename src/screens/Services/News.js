import {
  FlatList,
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

export default function News({ route }) {
  const Item = ({ item }) => {
    return (
      <Pressable
        onPress={() => {
          Linking.openURL(item.url);
        }}
      >
        <View style={styles.box}>
          <Image source={item?.thumbnail} style={styles.thumbnail} />
        </View>
      </Pressable>
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
  thumbnail: {
    width: "90%",
    height: 150,
    alignSelf: "center",
    resizeMode: "contain",
    marginVertical: 10,
  },
});
