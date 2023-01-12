import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home/Home";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar backgroundColor="#5dff91" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
