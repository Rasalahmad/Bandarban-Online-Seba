import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Doctors({ route }) {
  const data = route.params.item;

  const doctors = [
    {
      id: 1,
      service: [
        {
          id: 1,
          name: "Dr Rang Hin",
          img: "https://scontent.fcgp31-1.fna.fbcdn.net/v/t39.30808-6/319988884_3428902050720939_6023433068605453828_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEBjnVnxQc8_kLKbxT9OrQLNSoklbzHSX81KiSVvMdJf-LHS8Q1wW_1RwrGasuGSpzOeevi6sYubVIPT_TxuO0D&_nc_ohc=Ju1gceX7UqsAX9L5WcD&_nc_ht=scontent.fcgp31-1.fna&oh=00_AfAH6N12VTSBlBZgfCkqrkZMnzw5GpobcUU6-nceiifo4Q&oe=63CCDCFB",
          degree:
            "এমবিবিএস (ঢাকা মেডিকেল কলেজ) এফসিপিএস (গাইনী এন্ড অবস), বিসিএস (স্বাস্থ্য) স্ত্রী রোগ ও প্রসূতি বিশেষজ্ঞ সার্জন (বন্ধ্যাত্বের উপর বিশেষ প্রশিক্ষণপ্রাপ্ত)",
          d_phone: "018XXXXXXXX",
          category: "মেডিসিন",
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
          category: "মেডিসিন",
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
      id: 2,
      service: [
        {
          id: 1,
          name: "Dr Rang Hin",
          img: "https://scontent.fcgp31-1.fna.fbcdn.net/v/t39.30808-6/319988884_3428902050720939_6023433068605453828_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEBjnVnxQc8_kLKbxT9OrQLNSoklbzHSX81KiSVvMdJf-LHS8Q1wW_1RwrGasuGSpzOeevi6sYubVIPT_TxuO0D&_nc_ohc=Ju1gceX7UqsAX9L5WcD&_nc_ht=scontent.fcgp31-1.fna&oh=00_AfAH6N12VTSBlBZgfCkqrkZMnzw5GpobcUU6-nceiifo4Q&oe=63CCDCFB",
          degree:
            "এমবিবিএস (ঢাকা মেডিকেল কলেজ) এফসিপিএস (গাইনী এন্ড অবস), বিসিএস (স্বাস্থ্য) স্ত্রী রোগ ও প্রসূতি বিশেষজ্ঞ সার্জন (বন্ধ্যাত্বের উপর বিশেষ প্রশিক্ষণপ্রাপ্ত)",
          d_phone: "018XXXXXXXX",
          category: "গাইনী",
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
          category: "গাইনী",
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
      id: 3,
      service: [
        {
          id: 1,
          name: "Dr Rang Hin",
          img: "https://scontent.fcgp31-1.fna.fbcdn.net/v/t39.30808-6/319988884_3428902050720939_6023433068605453828_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEBjnVnxQc8_kLKbxT9OrQLNSoklbzHSX81KiSVvMdJf-LHS8Q1wW_1RwrGasuGSpzOeevi6sYubVIPT_TxuO0D&_nc_ohc=Ju1gceX7UqsAX9L5WcD&_nc_ht=scontent.fcgp31-1.fna&oh=00_AfAH6N12VTSBlBZgfCkqrkZMnzw5GpobcUU6-nceiifo4Q&oe=63CCDCFB",
          degree:
            "এমবিবিএস (ঢাকা মেডিকেল কলেজ) এফসিপিএস (গাইনী এন্ড অবস), বিসিএস (স্বাস্থ্য) স্ত্রী রোগ ও প্রসূতি বিশেষজ্ঞ সার্জন (বন্ধ্যাত্বের উপর বিশেষ প্রশিক্ষণপ্রাপ্ত)",
          d_phone: "018XXXXXXXX",
          category: "হার্ট রোগ বিশেষজ্ঞ",
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
          category: "হার্ট রোগ বিশেষজ্ঞ",
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
  ];

  const filterData = doctors.filter((d) => d.id === data.catId);

  console.log(filterData.map((d) => console.log("doc", d)));

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
