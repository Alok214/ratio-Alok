import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "./screens/ProfileScreen";
import BioScreen from "./screens/BioScreen";
import CuisineSelectionScreen from "./screens/Cuisine";
const Stack = createStackNavigator();

const App = () => {
  /**
   * Renders the main application component.
   */
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ProfileScreen} />
        <Stack.Screen name="Bio" component={BioScreen} />
        <Stack.Screen name="Cuisine" component={CuisineSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
