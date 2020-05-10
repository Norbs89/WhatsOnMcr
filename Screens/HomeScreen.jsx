import React, { useState } from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomButton from "../components/CustomButton";
import { AppLoading } from "expo";
import { fetchFonts } from "../utils/utils";

const HomeScreen = ({ navigation }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <ImageBackground
      source={require("../assets/appBckgr.png")}
      style={styles.bck}
    >
      {!isLoaded ? (
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => {
            setIsLoaded(true);
          }}
        />
      ) : (
        <View style={styles.main}>
          <Text style={styles.welcome}>Welcome to</Text>
          <Image
            source={require("../assets/mcrLogo.png")}
            style={styles.logo}
          />

          <Text style={styles.text}>
            Your one stop app for current events happening in your favourite
            city! Tap on one of the categories below to find your event and book
            your place in no time!
          </Text>

          <View style={styles.buttons}>
            <CustomButton title={"Sports"} navigation={navigation} />
            <CustomButton title={"Concerts"} navigation={navigation} />
            <CustomButton title={"Experiences"} navigation={navigation} />
          </View>
        </View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: hp("10%"),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  logo: {
    width: wp("60%"),
    height: hp("35%"),
    resizeMode: "contain",
  },
  bck: {
    flex: 1,
    resizeMode: "cover",
  },
  text: {
    width: wp("80%"),
    fontSize: hp("2.1%"),
    textAlign: "center",
    fontFamily: "BalooChettan2-SemiBold",
    color: "#41393E",
  },
  buttons: {
    margin: hp("3%"),
  },
  welcome: {
    fontSize: hp("2.1%"),
    fontFamily: "BalooChettan2-SemiBold",
    color: "#41393E",
  },
});

export default HomeScreen;
