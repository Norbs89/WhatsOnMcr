import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AppLoading } from "expo";
import { fetchFonts } from "../utils/utils";

const ListItems = ({ data, navigation }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              item.priceRanges
                ? navigation.navigate("Event", {
                    name: item.name,
                    event: item.id,
                    priceInfo: item.priceRanges,
                  })
                : navigation.navigate("Event", {
                    name: item.name,
                    event: item.id,
                    priceInfo: [],
                  });
            }}
          >
            <ImageBackground
              source={require("../assets/listbckgr.png")}
              style={styles.bck}
            >
              <View style={styles.listItem}>
                <Image
                  source={{ uri: `${item.images[0].url}` }}
                  style={styles.image}
                />
                {!isLoaded ? (
                  <AppLoading
                    startAsync={fetchFonts}
                    onFinish={() => {
                      setIsLoaded(true);
                    }}
                  />
                ) : (
                  <View style={styles.textWrap}>
                    <Text style={styles.specText}>{item.name}</Text>
                    <Text style={styles.text}>
                      Date: {item.dates.start.localDate}
                    </Text>
                    <Text style={styles.text}>
                      Venue: {item._embedded.venues[0].name}
                    </Text>
                    <Text style={styles.specText}>Tap for more info!</Text>
                  </View>
                )}
              </View>
            </ImageBackground>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: wp("80%"),
    height: hp("30%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  image: {
    width: wp("20%"),
    height: hp("30%"),
    resizeMode: "contain",
    borderRadius: 10,
  },
  textWrap: { paddingLeft: wp("5%"), width: wp("55%") },
  bck: {
    alignSelf: "center",
    width: wp("85%"),
    height: hp("30%"),
    resizeMode: "contain",
  },
  text: {
    fontSize: hp("2%"),
    textAlign: "center",
    fontFamily: "BalooChettan2-SemiBold",
    color: "#FFCB47",
  },
  specText: {
    fontSize: hp("2.2%"),
    textAlign: "center",
    fontFamily: "GochiHand-Regular",
    color: "#F6F7EB",
  },
});

export default ListItems;
