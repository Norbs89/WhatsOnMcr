import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { fetchList } from "../api/ticketMaster";
import SearchBar from "../components/SearchBar";
import { whatToShow } from "../utils/whatToShow";
import { AppLoading } from "expo";
import { fetchFonts } from "../utils/utils";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ConcertScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const updateState = (response) => {
    setResults(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchList("music", updateState);
  }, []);

  return (
    <ImageBackground
      source={require("../assets/appBckgr.png")}
      style={styles.bck}
    >
      <View>
        {!isLoaded ? (
          <AppLoading
            startAsync={fetchFonts}
            onFinish={() => {
              setIsLoaded(true);
            }}
          />
        ) : (
          <Text style={styles.text}>
            Here are the current music events happening right now:
          </Text>
        )}
        <SearchBar term={term} onTermChange={setTerm} />
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          whatToShow(term, results.slice(3), navigation)
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bck: {
    flex: 1,
    resizeMode: "cover",
  },
  text: {
    marginHorizontal: wp("10%"),
    fontSize: hp("2.1%"),
    textAlign: "center",
    fontFamily: "BalooChettan2-SemiBold",
    color: "#41393E",
  },
});

export default ConcertScreen;
