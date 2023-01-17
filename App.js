import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home/Home";
import { StatusBar } from "react-native";
import { colors } from "./src/theme/color";
import News from "./src/screens/Services/News";
import Blood from "./src/screens/Services/Blood";
import Hospital from "./src/screens/Services/Hospital";

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
            name="Hospital"
            component={Hospital}
            options={{
              title: "বান্দরবানের হাসপাতাল সমূহ",
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
