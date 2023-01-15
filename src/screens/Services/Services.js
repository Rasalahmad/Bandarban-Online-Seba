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
import news from "../../assets/icons/news.png";
import blood from "../../assets/icons/blood.png";
import hospital from "../../assets/icons/hospital.png";
import fireService from "../../assets/icons/fireService.png";
import ambulance from "../../assets/icons/ambulance.png";
import helpLine from "../../assets/icons/helpLine.png";
import police from "../../assets/icons/police.png";
import doctor from "../../assets/icons/doctor.png";
import lawyer from "../../assets/icons/lawyer.png";
import e_service from "../../assets/icons/e_service.png";
import bus from "../../assets/icons/bus.png";
import train from "../../assets/icons/train.png";
import journalist from "../../assets/icons/journalist.png";
import biddut from "../../assets/icons/biddut.png";
import restuarant from "../../assets/icons/restuarant.png";
import hotel from "../../assets/icons/hotel.png";
import v_place from "../../assets/icons/v_place.png";
import contactUs from "../../assets/icons/contactUs.png";
import p_barta from "../../assets/service/p_barta.png";
import p_alo from "../../assets/service/p_alo.jpg";
import b_protidin from "../../assets/service/b_protidin.jpg";
import d_star from "../../assets/service/d_star.png";
import { useNavigation } from "@react-navigation/native";

export default function Services() {
  const navigation = useNavigation();

  const services = [
    {
      id: 1,
      image: news,
      s_name: "খবর",
      details: [
        {
          id: 1,
          thumbnail: p_barta,
          url: "https://paharbarta.com/",
        },
        {
          id: 2,
          thumbnail: b_protidin,
          url: "https://bandarbanpratidin.com/",
        },
        {
          id: 3,
          thumbnail: p_alo,
          url: "https://www.prothomalo.com/",
        },
        {
          id: 4,
          thumbnail: d_star,
          url: "https://www.thedailystar.net/tags/bandarban",
        },
        {
          id: 5,
          thumbnail: p_alo,
          url: "https://www.prothomalo.com/",
        },
      ],
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
      image: ambulance,
      s_name: "এম্বুলেন্স",
      details: {},
    },
    {
      id: 6,
      image: helpLine,
      s_name: "হেল্প লাইন",
      details: {},
    },
    {
      id: 7,
      image: police,
      s_name: "থানা পুলিশ",
      details: {},
    },
    {
      id: 8,
      image: doctor,
      s_name: "ডাক্তার",
      details: {},
    },
    {
      id: 9,
      image: lawyer,
      s_name: "আইনজীবী",
      details: {},
    },
    {
      id: 10,
      image: e_service,
      s_name: "ই সবা",
      details: {},
    },
    {
      id: 11,
      image: bus,
      s_name: "বাস টিকিট",
      details: {},
    },
    {
      id: 12,
      image: train,
      s_name: "রেল সেবা",
      details: {},
    },
    {
      id: 13,
      image: journalist,
      s_name: "সাংবাদিক",
      details: {},
    },
    {
      id: 14,
      image: biddut,
      s_name: "পল্লী বিদ্যুৎ",
      details: {},
    },
    {
      id: 15,
      image: restuarant,
      s_name: "রেস্টুরেন্ট",
      details: {},
    },
    {
      id: 15,
      image: hotel,
      s_name: "হোটেল",
      details: {},
    },
    {
      id: 15,
      image: v_place,
      s_name: "দর্শনীয় স্থান",
      details: {},
    },
    {
      id: 15,
      image: contactUs,
      s_name: "Contact Us",
      details: {},
    },
  ];

  const Item = ({ item }) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate("service", { details: item.details })
        }
      >
        <View style={styles.box}>
          <Image source={item?.image} style={styles.image} />
          <Text style={styles.title}>{item?.s_name}</Text>
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
        renderItem={({ item }) => <Item item={item} />}
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
