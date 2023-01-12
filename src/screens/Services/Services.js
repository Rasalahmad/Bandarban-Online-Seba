import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { colors } from "../../theme/color";
import { spacing } from "../../theme/spacing";
import news from "../../assets/news.png";
import blood from "../../assets/blood.png";
import hospital from "../../assets/hospital.png";
import fireService from "../../assets/fireService.png";

export default function Services() {
  const services = [
    {
      id: 1,
      image: news,
      s_name: "খবর",
      details: {},
    },
    {
      id: 2,
      image: blood,
      s_name: "ব্লাড ডোনার",
      details: {},
    },
    {
      id: 3,
      image: hospital,
      s_name: "হাসপাতাল",
      details: {},
    },
    {
      id: 4,
      image: fireService,
      s_name: "ফায়ার সার্ভিস",
      details: {},
    },
    {
      id: 5,
      image: news,
      s_name: "এম্বুলেন্স",
      details: {},
    },
    {
      id: 6,
      image: blood,
      s_name: "হেল্প লাইন",
      details: {},
    },
    {
      id: 7,
      image: hospital,
      s_name: "থানা পুলিশ",
      details: {},
    },
    {
      id: 8,
      image: fireService,
      s_name: "ডাক্তার",
      details: {},
    },
    {
      id: 9,
      image: fireService,
      s_name: "আইনজীবী",
      details: {},
    },
    {
      id: 10,
      image: fireService,
      s_name: "ই সবা",
      details: {},
    },
    {
      id: 11,
      image: fireService,
      s_name: "বাস টিকিট",
      details: {},
    },
    {
      id: 12,
      image: fireService,
      s_name: "রেল সেবা",
      details: {},
    },
    {
      id: 13,
      image: fireService,
      s_name: "সাংবাদিক",
      details: {},
    },
    {
      id: 14,
      image: fireService,
      s_name: "পল্লী বিদ্যুৎ",
      details: {},
    },
    {
      id: 15,
      image: fireService,
      s_name: "রেস্টুরেন্ট",
      details: {},
    },
    {
      id: 15,
      image: fireService,
      s_name: "হোটেল",
      details: {},
    },
    {
      id: 15,
      image: fireService,
      s_name: "দর্শনীয় স্থান",
      details: {},
    },
    {
      id: 15,
      image: fireService,
      s_name: "Contact Us",
      details: {},
    },
  ];

  const Item = ({ title, img }) => {
    return (
      <Pressable onPress={() => {}}>
        <View style={styles.box}>
          <Image source={img} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.contaienr}>
      <Text style={styles.text}>আমাদের সমূহ...</Text>
      <FlatList
        contentContainerStyle={styles.serviceContainer}
        key={"_"}
        data={services}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item title={item.s_name} img={item.image} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contaienr: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    paddingHorizontal: spacing[4],
    paddingTop: spacing[3],
    backgroundColor: colors.green,
  },
  serviceContainer: {
    alignItems: "center",
  },
  box: {
    backgroundColor: "gray",
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[1],
    margin: spacing[1],
    borderRadius: 10,
    height: 120,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  title: {
    color: colors.white,
    fontSize: 15,
    paddingVertical: 5,
  },
});
