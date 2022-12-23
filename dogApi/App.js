import React from "react";
import Pesquisar from "./src/screens/index";
import Visualizar from "./src/screens/visualizar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={Pesquisar} />
        <Stack.Screen name="Visualizar" component={Visualizar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
