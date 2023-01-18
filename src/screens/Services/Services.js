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
import j_news from "../../assets/service/j_news.png";
import { useNavigation } from "@react-navigation/native";

export default function Services() {
  const navigation = useNavigation();

  const services = [
    {
      id: 1,
      image: news,
      s_name: "খবর",
      title: "NEWS",
      heading: "",
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
          thumbnail: j_news,
          url: "https://www.jagonews24.com/bangladesh/chittagong/bandarban",
        },
      ],
    },
    {
      id: 2,
      image: blood,
      s_name: "ব্লাড ডোনার",
      title: "BLOOD",
      heading: "",
      details: [
        {
          id: 1,
          name: "Rasel Ahmad",
          img: "https://scontent.fcgp31-1.fna.fbcdn.net/v/t39.30808-6/319988884_3428902050720939_6023433068605453828_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEBjnVnxQc8_kLKbxT9OrQLNSoklbzHSX81KiSVvMdJf-LHS8Q1wW_1RwrGasuGSpzOeevi6sYubVIPT_TxuO0D&_nc_ohc=3wfI9Wg9-7kAX_3Rg4X&_nc_ht=scontent.fcgp31-1.fna&oh=00_AfAHoufyU9HAPH6jK7mh_9Dw0nN0-8GQ7H8pnjwd_lu7og&oe=63CAE2BB",
          phone: "01625605340",
          bg: "B+",
          location: "Sadar",
          proffesion: "Student",
        },
        {
          id: 2,
          name: "Rang Hin",
          phone: "01531-984667",
          bg: "A+",
          img: "https://scontent.fcgp31-1.fna.fbcdn.net/v/t39.30808-6/313177927_827705958466981_3640847728582947632_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeElXHKSki72X6UCRDneXZ9dcX0jjn-ayFxxfSOOf5rIXEgG8XeI83kHIqhp9cTeR10-mL-5zYPDnZDU4a5Hr-XE&_nc_ohc=hhPusT-RkmYAX_Dy0Fs&tn=ZE9oQOZZa34KuElu&_nc_ht=scontent.fcgp31-1.fna&oh=00_AfCuthBQ_c0PMugR0I9V9e9-S8NUoGnJsXbabWzyraKpww&oe=63C9C477",
          location: "Sadar",
          proffesion: "Student",
        },
        {
          id: 3,
          name: "Who is Wahid",
          phone: "01625605340",
          bg: "O+",
          img: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
          location: "Sadar",
          proffesion: "Cheater",
        },
      ],
    },
    {
      id: 3,
      image: hospital,
      s_name: "হাসপাতাল",
      title: "COMMONSERVICE",
      heading: "বান্দরবানের হাসপাতাল সমূহ",
      details: [
        {
          id: 1,
          name: "বান্দরবান সদর হাসপাতাল",
          location: "বান্দরবান সদর",
          phone: "01730-324765",
        },
        {
          id: 2,
          name: "বান্দরবান ডাইবেটিক হাসপাতাল",
          location: "বান্দরবান সদর",
          phone: "0361-63288",
        },
        {
          id: 3,
          name: "বান্দরবান প্যাথলজি সেন্টার",
          location: "Bandarban Government High School, Caowl Bazar Rd,",
          phone: "01786-257776",
        },
        {
          id: 4,
          name: "Islami shikka kendro health complex",
          location: "বান্দরবান সদর",
          phone: "01XXXXXXXX",
        },
        {
          id: 5,
          name: "সূর্য়ের হাসি ক্লিনিক",
          location: "বালাঘাটা, বান্দরবন পার্বত্য জেলা",
          phone: "0361-63288",
        },
        {
          id: 6,
          name: "বান্দরবান ডেন্টাল কেয়ার",
          location: "সরকারি উচ্চ বিদ্যালয়ের বিপরীতে",
          phone: "01777-699669",
        },
        {
          id: 7,
          name: "সাইক্লোন সেন্টার",
          location: "হাফেজ ঘোনা, ৮ নং ওয়ার্ড",
          phone: "01777-699669",
        },
      ],
    },
    {
      id: 4,
      image: fireService,
      s_name: "ফায়ার সার্ভিস",
      title: "COMMONSERVICE",
      heading: "বান্দরবানের ফায়ার সার্ভিস",
      details: [
        {
          id: 1,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 2,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 3,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 4,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 5,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
      ],
    },
    {
      id: 5,
      image: ambulance,
      s_name: "এম্বুলেন্স",
      title: "COMMONSERVICE",
      heading: "বান্দরবানের এম্বুলেন্স সার্ভিস",
      details: [
        {
          id: 1,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 2,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 3,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 4,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 5,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
      ],
    },
    {
      id: 6,
      image: helpLine,
      s_name: "হেল্প লাইন",
      title: "HELPLINE",
      heading: "বান্দরবানের এম্বুলেন্স সার্ভিস",
      details: {},
    },
    {
      id: 7,
      image: police,
      s_name: "থানা পুলিশ",
      heading: "বান্দরবানের পুলিশ",
      title: "COMMONSERVICE",
      details: [
        {
          id: 1,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 2,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 3,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 4,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 5,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
      ],
    },
    {
      id: 8,
      image: doctor,
      s_name: "ডাক্তার",
      title: "CATEGORY",
      details: [
        {
          id: 1,
          name: "Dr Rang Hin",
          img: "https://scontent.fcgp31-1.fna.fbcdn.net/v/t39.30808-6/319988884_3428902050720939_6023433068605453828_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEBjnVnxQc8_kLKbxT9OrQLNSoklbzHSX81KiSVvMdJf-LHS8Q1wW_1RwrGasuGSpzOeevi6sYubVIPT_TxuO0D&_nc_ohc=Ju1gceX7UqsAX9L5WcD&_nc_ht=scontent.fcgp31-1.fna&oh=00_AfAH6N12VTSBlBZgfCkqrkZMnzw5GpobcUU6-nceiifo4Q&oe=63CCDCFB",
          degree:
            "এমবিবিএস (ঢাকা মেডিকেল কলেজ) এফসিপিএস (গাইনী এন্ড অবস), বিসিএস (স্বাস্থ্য) স্ত্রী রোগ ও প্রসূতি বিশেষজ্ঞ সার্জন (বন্ধ্যাত্বের উপর বিশেষ প্রশিক্ষণপ্রাপ্ত)",
          d_phone: "018XXXXXXXX",
          category: "স্ত্রীরোগ / গাইনী",
          designation: "কনসালটেন্ট (গাইনী)",
          hospital: "বান্দরবান সদর হাসপাতাল",
          division: "চট্টগ্রাম",
          district: "বান্দরবান",
          chamber:
            "স্বর্ণ টাওয়ার(২য় ও ৩য় তলা) ৮২ ডি.সি. রোড, (কালীবাড়ির উত্তর পার্শ্বে), গোপালগঞ্জ ।",
          time: "প্রতি শুক্রবার সারাদিন",
          s_phone: { n1: "018XXXXXXXX", n2: "018XXXXXXXX" },
          social: { fb: "", twitter: "", email: "", instra: "" },
          rating: "4",
        },
        {
          id: 2,
          name: "Dr Rang Hin",
          img: "https://scontent.fcgp31-1.fna.fbcdn.net/v/t39.30808-6/319988884_3428902050720939_6023433068605453828_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEBjnVnxQc8_kLKbxT9OrQLNSoklbzHSX81KiSVvMdJf-LHS8Q1wW_1RwrGasuGSpzOeevi6sYubVIPT_TxuO0D&_nc_ohc=Ju1gceX7UqsAX9L5WcD&_nc_ht=scontent.fcgp31-1.fna&oh=00_AfAH6N12VTSBlBZgfCkqrkZMnzw5GpobcUU6-nceiifo4Q&oe=63CCDCFB",
          degree:
            "এমবিবিএস (ঢাকা মেডিকেল কলেজ) এফসিপিএস (গাইনী এন্ড অবস), বিসিএস (স্বাস্থ্য) স্ত্রী রোগ ও প্রসূতি বিশেষজ্ঞ সার্জন (বন্ধ্যাত্বের উপর বিশেষ প্রশিক্ষণপ্রাপ্ত)",
          d_phone: "018XXXXXXXX",
          category: "স্ত্রীরোগ / গাইনী",
          designation: "কনসালটেন্ট (গাইনী)",
          hospital: "বান্দরবান সদর হাসপাতাল",
          division: "চট্টগ্রাম",
          district: "বান্দরবান",
          chamber:
            "স্বর্ণ টাওয়ার(২য় ও ৩য় তলা) ৮২ ডি.সি. রোড, (কালীবাড়ির উত্তর পার্শ্বে), গোপালগঞ্জ ।",
          time: "প্রতি শুক্রবার সারাদিন",
          s_phone: { n1: "018XXXXXXXX", n2: "018XXXXXXXX" },
          social: { fb: "", twitter: "", email: "", instra: "" },
          rating: "4",
        },
        {
          id: 3,
          name: "Dr Rang Hin",
          img: "https://scontent.fcgp31-1.fna.fbcdn.net/v/t39.30808-6/319988884_3428902050720939_6023433068605453828_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEBjnVnxQc8_kLKbxT9OrQLNSoklbzHSX81KiSVvMdJf-LHS8Q1wW_1RwrGasuGSpzOeevi6sYubVIPT_TxuO0D&_nc_ohc=Ju1gceX7UqsAX9L5WcD&_nc_ht=scontent.fcgp31-1.fna&oh=00_AfAH6N12VTSBlBZgfCkqrkZMnzw5GpobcUU6-nceiifo4Q&oe=63CCDCFB",
          degree:
            "এমবিবিএস (ঢাকা মেডিকেল কলেজ) এফসিপিএস (গাইনী এন্ড অবস), বিসিএস (স্বাস্থ্য) স্ত্রী রোগ ও প্রসূতি বিশেষজ্ঞ সার্জন (বন্ধ্যাত্বের উপর বিশেষ প্রশিক্ষণপ্রাপ্ত)",
          d_phone: "018XXXXXXXX",
          category: "স্ত্রীরোগ / গাইনী",
          designation: "কনসালটেন্ট (গাইনী)",
          hospital: "বান্দরবান সদর হাসপাতাল",
          division: "চট্টগ্রাম",
          district: "বান্দরবান",
          chamber:
            "স্বর্ণ টাওয়ার(২য় ও ৩য় তলা) ৮২ ডি.সি. রোড, (কালীবাড়ির উত্তর পার্শ্বে), গোপালগঞ্জ ।",
          time: "প্রতি শুক্রবার সারাদিন",
          s_phone: { n1: "018XXXXXXXX", n2: "018XXXXXXXX" },
          social: { fb: "", twitter: "", email: "", instra: "" },
          rating: "4",
        },
        {
          id: 4,
          name: "Dr Rang Hin",
          img: "https://scontent.fcgp31-1.fna.fbcdn.net/v/t39.30808-6/319988884_3428902050720939_6023433068605453828_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEBjnVnxQc8_kLKbxT9OrQLNSoklbzHSX81KiSVvMdJf-LHS8Q1wW_1RwrGasuGSpzOeevi6sYubVIPT_TxuO0D&_nc_ohc=Ju1gceX7UqsAX9L5WcD&_nc_ht=scontent.fcgp31-1.fna&oh=00_AfAH6N12VTSBlBZgfCkqrkZMnzw5GpobcUU6-nceiifo4Q&oe=63CCDCFB",
          degree:
            "এমবিবিএস (ঢাকা মেডিকেল কলেজ) এফসিপিএস (গাইনী এন্ড অবস), বিসিএস (স্বাস্থ্য) স্ত্রী রোগ ও প্রসূতি বিশেষজ্ঞ সার্জন (বন্ধ্যাত্বের উপর বিশেষ প্রশিক্ষণপ্রাপ্ত)",
          d_phone: "018XXXXXXXX",
          category: "Medicine",
          designation: "কনসালটেন্ট (গাইনী)",
          hospital: "বান্দরবান সদর হাসপাতাল",
          division: "চট্টগ্রাম",
          district: "বান্দরবান",
          chamber:
            "স্বর্ণ টাওয়ার(২য় ও ৩য় তলা) ৮২ ডি.সি. রোড, (কালীবাড়ির উত্তর পার্শ্বে), গোপালগঞ্জ ।",
          time: "প্রতি শুক্রবার সারাদিন",
          s_phone: { n1: "018XXXXXXXX", n2: "018XXXXXXXX" },
          social: { fb: "", twitter: "", email: "", instra: "" },
          rating: "4",
        },
      ],
    },
    {
      id: 9,
      image: lawyer,
      s_name: "আইনজীবী",
      title: "LAWYER",
      details: {},
    },
    {
      id: 10,
      image: e_service,
      s_name: "ই সবা",
      title: "ESERVICE",
      details: {},
    },
    {
      id: 11,
      image: bus,
      s_name: "বাস টিকিট",
      title: "BUS",
      details: {},
    },
    {
      id: 12,
      image: train,
      s_name: "রেল সেবা",
      title: "RAIL",
      details: {},
    },
    {
      id: 13,
      image: journalist,
      s_name: "সাংবাদিক",
      title: "JOURNALIST",
      details: {},
    },
    {
      id: 14,
      image: biddut,
      s_name: "পল্লী বিদ্যুৎ",
      heading: "বান্দরবানের পল্লী বিদ্যুৎ",
      title: "COMMONSERVICE",
      details: [
        {
          id: 1,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 2,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 3,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 4,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 5,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
      ],
    },
    {
      id: 15,
      image: restuarant,
      s_name: "রেস্টুরেন্ট",
      heading: "বান্দরবানের রেস্টুরেন্ট",
      title: "COMMONSERVICE",
      details: [
        {
          id: 1,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 2,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 3,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 4,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 5,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
      ],
    },
    {
      id: 15,
      image: hotel,
      s_name: "হোটেল",
      heading: "বান্দরবানের হোটেল",
      title: "COMMONSERVICE",
      details: [
        {
          id: 1,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 2,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 3,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 4,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
        {
          id: 5,
          name: "Rang Hin",
          location: "",
          phone: "01654525654",
        },
      ],
    },
    {
      id: 15,
      image: v_place,
      s_name: "দর্শনীয় স্থান",
      title: "VPLACE",
      details: {},
    },
    {
      id: 15,
      image: contactUs,
      s_name: "Contact Us",
      title: "CONTACT",
      details: {},
    },
  ];

  const Item = ({ item }) => {
    return (
      <Pressable
        onPress={() => {
          switch (item.title) {
            case "NEWS":
              return navigation.navigate("News", { details: item.details });
            case "BLOOD":
              return navigation.navigate("Blood", { details: item.details });
            case "COMMONSERVICE":
              return navigation.navigate("CommonService", {
                details: item.details,
                heading: item?.heading,
              });
            case "CATEGORY":
              return navigation.navigate("Category", { details: item.details });
          }
        }}
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
