import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home/Home";
import { StatusBar } from "react-native";
import Service from "./src/screens/Services/Service";
import { colors } from "./src/theme/color";

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
            name="service"
            component={Service}
            options={{
              title: "বান্দরবান জেলার প্রতিদিনের খবর",
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
