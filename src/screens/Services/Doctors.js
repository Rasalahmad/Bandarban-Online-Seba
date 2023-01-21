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

export default function Doctors({ route }) {
  const data = route.params.item;

  const doctors = [
    {
      id: 1,
      category: "মেডিসিন",
      service: [
        {
          id: 1,
          name: "Dr Rang Hin",
          img: "https://scontent.fcgp31-1.fna.fbcdn.net/v/t39.30808-1/313177927_827705958466981_3640847728582947632_n.jpg?stp=dst-jpg_s320x320&_nc_cat=109&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeElXHKSki72X6UCRDneXZ9dcX0jjn-ayFxxfSOOf5rIXEgG8XeI83kHIqhp9cTeR10-mL-5zYPDnZDU4a5Hr-XE&_nc_ohc=Irs3EIkl_pwAX_BnZGh&tn=ZE9oQOZZa34KuElu&_nc_ht=scontent.fcgp31-1.fna&oh=00_AfCCw5BuWcXCZWCcSIOEz7y1uWV1i5NvQPJ7lD60sgKIZQ&oe=63D063B1",
          degree:
            "এমবিবিএস (ঢাকা মেডিকেল কলেজ) এফসিপিএস (গাইনী এন্ড অবস), বিসিএস (স্বাস্থ্য) স্ত্রী রোগ ও প্রসূতি বিশেষজ্ঞ সার্জন (বন্ধ্যাত্বের উপর বিশেষ প্রশিক্ষণপ্রাপ্ত)",
          d_phone: "018XXXXXXXX",
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
          name: "Dr Rasel Ahmad",
          img: "https://scontent.fcgp31-1.fna.fbcdn.net/v/t39.30808-6/319988884_3428902050720939_6023433068605453828_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEBjnVnxQc8_kLKbxT9OrQLNSoklbzHSX81KiSVvMdJf-LHS8Q1wW_1RwrGasuGSpzOeevi6sYubVIPT_TxuO0D&_nc_ohc=Ju1gceX7UqsAX9L5WcD&_nc_ht=scontent.fcgp31-1.fna&oh=00_AfAH6N12VTSBlBZgfCkqrkZMnzw5GpobcUU6-nceiifo4Q&oe=63CCDCFB",
          degree:
            "এমবিবিএস (ঢাকা মেডিকেল কলেজ) এফসিপিএস (গাইনী এন্ড অবস), বিসিএস (স্বাস্থ্য) স্ত্রী রোগ ও প্রসূতি বিশেষজ্ঞ সার্জন (বন্ধ্যাত্বের উপর বিশেষ প্রশিক্ষণপ্রাপ্ত)",
          d_phone: "018XXXXXXXX",
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
      category: "গাইনী",
      service: [
        {
          id: 1,
          name: "Dr Ma Aye Sain Marba",
          img: "https://scontent.fcgp31-1.fna.fbcdn.net/v/t39.30808-6/285695466_1495709054219880_9096403924738925291_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFPmYWsjedmc0Spsl7cf_ympguajUbIFQymC5qNRsgVDARwmjDLyuG2cVTjvhcKrWc7YQ2Pu85kbUKyGmBp6sIO&_nc_ohc=T35kmQWchwQAX-lVFOB&_nc_ht=scontent.fcgp31-1.fna&oh=00_AfANQMgpi3DZdbef8Ag7SSHm1OrY8IR7VIvsDNvSw9_Aiw&oe=63D14FA7",
          degree:
            "এমবিবিএস (ঢাকা মেডিকেল কলেজ) এফসিপিএস (গাইনী এন্ড অবস), বিসিএস (স্বাস্থ্য) স্ত্রী রোগ ও প্রসূতি বিশেষজ্ঞ সার্জন (বন্ধ্যাত্বের উপর বিশেষ প্রশিক্ষণপ্রাপ্ত)",
          d_phone: "018XXXXXXXX",
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
          img: "https://scontent.fcgp31-1.fna.fbcdn.net/v/t39.30808-1/313177927_827705958466981_3640847728582947632_n.jpg?stp=dst-jpg_s320x320&_nc_cat=109&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeElXHKSki72X6UCRDneXZ9dcX0jjn-ayFxxfSOOf5rIXEgG8XeI83kHIqhp9cTeR10-mL-5zYPDnZDU4a5Hr-XE&_nc_ohc=Irs3EIkl_pwAX_BnZGh&tn=ZE9oQOZZa34KuElu&_nc_ht=scontent.fcgp31-1.fna&oh=00_AfCCw5BuWcXCZWCcSIOEz7y1uWV1i5NvQPJ7lD60sgKIZQ&oe=63D063B1",
          degree:
            "এমবিবিএস (ঢাকা মেডিকেল কলেজ) এফসিপিএস (গাইনী এন্ড অবস), বিসিএস (স্বাস্থ্য) স্ত্রী রোগ ও প্রসূতি বিশেষজ্ঞ সার্জন (বন্ধ্যাত্বের উপর বিশেষ প্রশিক্ষণপ্রাপ্ত)",
          d_phone: "018XXXXXXXX",
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
      category: "হার্ট রোগ বিশেষজ্ঞ",
      service: [
        {
          id: 1,
          name: "Dr Rasel Ahmad",
          img: "https://scontent.fcgp31-1.fna.fbcdn.net/v/t39.30808-6/319988884_3428902050720939_6023433068605453828_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEBjnVnxQc8_kLKbxT9OrQLNSoklbzHSX81KiSVvMdJf-LHS8Q1wW_1RwrGasuGSpzOeevi6sYubVIPT_TxuO0D&_nc_ohc=Ju1gceX7UqsAX9L5WcD&_nc_ht=scontent.fcgp31-1.fna&oh=00_AfAH6N12VTSBlBZgfCkqrkZMnzw5GpobcUU6-nceiifo4Q&oe=63CCDCFB",
          degree:
            "এমবিবিএস (ঢাকা মেডিকেল কলেজ) এফসিপিএস (গাইনী এন্ড অবস), বিসিএস (স্বাস্থ্য) স্ত্রী রোগ ও প্রসূতি বিশেষজ্ঞ সার্জন (বন্ধ্যাত্বের উপর বিশেষ প্রশিক্ষণপ্রাপ্ত)",
          d_phone: "018XXXXXXXX",
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
          img: "https://scontent.fcgp31-1.fna.fbcdn.net/v/t39.30808-1/313177927_827705958466981_3640847728582947632_n.jpg?stp=dst-jpg_s320x320&_nc_cat=109&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeElXHKSki72X6UCRDneXZ9dcX0jjn-ayFxxfSOOf5rIXEgG8XeI83kHIqhp9cTeR10-mL-5zYPDnZDU4a5Hr-XE&_nc_ohc=Irs3EIkl_pwAX_BnZGh&tn=ZE9oQOZZa34KuElu&_nc_ht=scontent.fcgp31-1.fna&oh=00_AfCCw5BuWcXCZWCcSIOEz7y1uWV1i5NvQPJ7lD60sgKIZQ&oe=63D063B1",
          degree:
            "এমবিবিএস (ঢাকা মেডিকেল কলেজ) এফসিপিএস (গাইনী এন্ড অবস), বিসিএস (স্বাস্থ্য) স্ত্রী রোগ ও প্রসূতি বিশেষজ্ঞ সার্জন (বন্ধ্যাত্বের উপর বিশেষ প্রশিক্ষণপ্রাপ্ত)",
          d_phone: "018XXXXXXXX",
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
          name: "Dr Ma Aye Sain Marba",
          img: "https://scontent.fcgp31-1.fna.fbcdn.net/v/t39.30808-6/285695466_1495709054219880_9096403924738925291_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFPmYWsjedmc0Spsl7cf_ympguajUbIFQymC5qNRsgVDARwmjDLyuG2cVTjvhcKrWc7YQ2Pu85kbUKyGmBp6sIO&_nc_ohc=T35kmQWchwQAX-lVFOB&_nc_ht=scontent.fcgp31-1.fna&oh=00_AfANQMgpi3DZdbef8Ag7SSHm1OrY8IR7VIvsDNvSw9_Aiw&oe=63D14FA7",
          degree:
            "এমবিবিএস (ঢাকা মেডিকেল কলেজ) এফসিপিএস (গাইনী এন্ড অবস), বিসিএস (স্বাস্থ্য) স্ত্রী রোগ ও প্রসূতি বিশেষজ্ঞ সার্জন (বন্ধ্যাত্বের উপর বিশেষ প্রশিক্ষণপ্রাপ্ত)",
          d_phone: "018XXXXXXXX",
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

  console.log("doctors", doctors);

  const filterData = doctors.filter((d) => d.id === data.catId);
  const f_doctors = filterData.map((d) => d.service);
  const Item = ({ item }) => {
    return (
      <>
        {item?.map((d) => (
          <Pressable
            onPress={() => navigation.navigate("Doctor", { item: item })}
            key={d.id}
          >
            <View style={styles.main}>
              <Image source={{ uri: d?.img }} style={styles.thumbnail} />
              <Text style={styles.name}>{d.name}</Text>
              <Text>
                <Text style={styles.boldText}>Designation</Text> :{" "}
                {d.designation}
              </Text>
              <Text>
                <Text style={styles.boldText}>Professional Degree</Text> :{" "}
                {d.degree}
              </Text>
              <Text>
                <Text style={styles.boldText}>Phone</Text> : {d.d_phone}
              </Text>
            </View>
          </Pressable>
        ))}
      </>
    );
  };

  return (
    <SafeAreaView style={styles.contaienr}>
      <FlatList
        key={"_"}
        data={f_doctors}
        numColumns={1}
        style={styles.list}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Item item={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 15,
    borderWidth: 1,
    borderColor: colors.lightGreen,
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
