import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home/Home";
import { StatusBar } from "react-native";
import { colors } from "./src/theme/color";
import News from "./src/screens/Services/News";
import Blood from "./src/screens/Services/Blood";
import CommonService from "./src/screens/Services/CommonService";
import Category from "./src/screens/Services/Category";
import Doctors from "./src/screens/Services/Doctors";
import Lawyer from "./src/screens/Services/Lawyer";
import Journalist from "./src/screens/Services/Journalist";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar backgroundColor="#5dff91" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="News"
            component={News}
            options={{
              title: "বান্দরবান জেলার প্রতিদিনের খবর",
              headerStyle: {
                backgroundColor: colors.green,
              },
            }}
          />
          <Stack.Screen
            name="Blood"
            component={Blood}
            options={{
              title: "জরুরি রক্তের জন্য কল করুন",
              headerStyle: {
                backgroundColor: colors.green,
              },
            }}
          />
          <Stack.Screen
            name="CommonService"
            component={CommonService}
            options={({ route }) => ({
              title: route.params.heading,
              headerStyle: {
                backgroundColor: colors.green,
              },
            })}
          />
          <Stack.Screen
            name="Category"
            component={Category}
            options={{
              title: "বিশেষজ্ঞ ডাক্তারদের তালিকা",
              headerStyle: {
                backgroundColor: colors.green,
              },
            }}
          />
          <Stack.Screen
            name="Doctors"
            component={Doctors}
            options={({ route }) => ({
              title: route.params.heading,
              headerStyle: {
                headerTitleAlign: "center",
                backgroundColor: colors.green,
              },
            })}
          />
          <Stack.Screen
            name="Lawyer"
            component={Lawyer}
            options={{
              title: "বান্দরবান জেলার আইনজীবী",
              headerStyle: {
                backgroundColor: colors.green,
              },
            }}
          />
          <Stack.Screen
            name="Journalist"
            component={Journalist}
            options={{
              title: "বান্দরবান জেলার সাংবাদিক",
              headerStyle: {
                backgroundColor: colors.green,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
