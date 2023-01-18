import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Doctors({ route }) {
  const data = route.params.item;
  console.log(data);
  return (
    <View>
      <View style={styles.main}>
        <Image source={{ uri: data?.img }} style={styles.thumbnail} />
        <Text style={styles.name}>{data.name}</Text>
        <Text>
          <Text style={styles.boldText}>Designation</Text> : {data.designation}
        </Text>
        <Text>
          <Text style={styles.boldText}>Professional Degree</Text> :{" "}
          {data.degree}
        </Text>
        <Text>
          <Text style={styles.boldText}>Phone</Text> : {data.d_phone}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 15,
    borderWidth: 1,
    borderColor: "red",
    padding: 15,
    borderRadius: 5,
  },
  thumbnail: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 20,
    alignSelf: "center",
    resizeMode: "cover",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  boldText: {
    fontWeight: "bold",
  },
});
