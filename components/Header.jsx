import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BlurView } from "expo-blur";
import { AppLoading } from "expo";
import { fetchFonts } from "../utils/utils";
import HomeScreen from "../Screens/HomeScreen";
import ExperienceScreen from "../Screens/ExperienceScreen";
import SportScreen from "../Screens/SportScreen";
import ConcertScreen from "../Screens/ConcertScreen";
import EventScreen from "../Screens/EventScreen";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Stack = createStackNavigator();

const Header = ({ params }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <NavigationContainer>
      {!isLoaded ? (
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => {
            setIsLoaded(true);
          }}
        />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Home",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Sports"
            component={SportScreen}
            options={{
              headerTitleAlign: "center",
              headerTransparent: true,
              headerTintColor: "#FFCB47",
              headerTitleStyle: {
                fontSize: hp("5%"),
                fontFamily: "GochiHand-Regular",
              },
              headerBackground: () => (
                <BlurView
                  tint="dark"
                  intensity={90}
                  style={StyleSheet.absoluteFill}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Concerts"
            component={ConcertScreen}
            options={{
              headerTitleAlign: "center",
              headerTransparent: true,
              headerTintColor: "#FFCB47",
              headerTitleStyle: {
                fontSize: hp("5%"),
                fontFamily: "GochiHand-Regular",
              },
              headerBackground: () => (
                <BlurView
                  tint="dark"
                  intensity={90}
                  style={StyleSheet.absoluteFill}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Experiences"
            component={ExperienceScreen}
            options={{
              headerTitleAlign: "center",
              headerTransparent: true,
              headerTintColor: "#FFCB47",
              headerTitleStyle: {
                fontSize: hp("5%"),
                fontFamily: "GochiHand-Regular",
              },
              headerBackground: () => (
                <BlurView
                  tint="dark"
                  intensity={90}
                  style={StyleSheet.absoluteFill}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Event"
            component={EventScreen}
            options={({ route }) => ({
              title: route.params.name,
              headerTitleAlign: "center",
              headerTransparent: true,
              headerTintColor: "#FFCB47",
              headerTitleStyle: {
                fontSize: hp("4%"),
                fontFamily: "BebasNeue-Regular",
              },
              headerBackground: () => (
                <BlurView
                  tint="dark"
                  intensity={90}
                  style={StyleSheet.absoluteFill}
                />
              ),
            })}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Header;
