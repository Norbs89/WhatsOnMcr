import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AppLoading } from "expo";
import { fetchFonts } from "../utils/utils";

const CustomButton = ({ title, navigation }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        !(typeof navigation === "string")
          ? navigation.navigate(title)
          : Linking.openURL(`${navigation}`);
      }}
      style={styles.touchable}
    >
      <Image
        source={require("../assets/buttonbckgr.png")}
        style={styles.btnImg}
      />
      <View style={styles.btnView}>
        {!isLoaded ? (
          <AppLoading
            startAsync={fetchFonts}
            onFinish={() => {
              setIsLoaded(true);
            }}
          />
        ) : (
          <Text style={styles.text}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnImg: {
    width: wp("40%"),
    height: hp("12%"),
    resizeMode: "contain",
  },
  btnView: {
    position: "absolute",
    backgroundColor: "transparent",
  },
  touchable: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "yellow",
    fontSize: wp("5%"),
    fontFamily: "GochiHand-Regular",
  },
});

export default CustomButton;
