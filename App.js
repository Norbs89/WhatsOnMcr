import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/HomeScreen";
import ExperienceScreen from "./Screens/ExperienceScreen";
import SportScreen from "./Screens/SportScreen";
import ConcertScreen from "./Screens/ConcertScreen";
import EventScreen from "./Screens/EventScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen name="Sports" component={SportScreen} />
        <Stack.Screen name="Concerts" component={ConcertScreen} />
        <Stack.Screen name="Experiences" component={ExperienceScreen} />
        <Stack.Screen
          name="Event"
          component={EventScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
