import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { fetchEvent } from "../api/ticketMaster";
import CustomButton from "../components/CustomButton";
import { AppLoading } from "expo";
import { fetchFonts } from "../utils/utils";

const EventScreen = ({ route }) => {
  const { event } = route.params;
  const { priceInfo } = route.params;
  const [currentEvent, setEvent] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const updateState = (response) => {
    setEvent(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchEvent(event, updateState);
  }, []);

  return (
    <ImageBackground
      source={require("../assets/appBckgr.png")}
      style={styles.bck}
    >
      <View style={styles.page}>
        {isLoading ? (
          <ActivityIndicator />
        ) : !isLoaded ? (
          <AppLoading
            startAsync={fetchFonts}
            onFinish={() => {
              setIsLoaded(true);
            }}
          />
        ) : (
          <View style={styles.main}>
            <Image
              source={{ uri: `${currentEvent.images[1].url}` }}
              style={styles.image}
            />
            <Text style={styles.name}>{currentEvent.name}</Text>
            <View style={styles.date_venue}>
              <View style={styles.subWrap}>
                <Text style={styles.header}>Start Date & Time:</Text>
                <Text style={styles.text}>
                  {currentEvent.dates.start.localDate}
                </Text>
                <Text style={styles.text}>
                  {currentEvent.dates.start.localTime}
                </Text>
              </View>
              <View style={styles.subWrap}>
                <Text style={styles.header}>Venue Details:</Text>
                <Text style={styles.text}>
                  {currentEvent._embedded.venues[0].name}
                </Text>
                <Text style={styles.text}>
                  {currentEvent._embedded.venues[0].address.line1}
                </Text>
                <Text style={styles.text}>
                  {currentEvent._embedded.venues[0].postalCode}
                </Text>
              </View>
            </View>
            <View style={styles.pricing}>
              <Text style={styles.header}>Pricing info:</Text>
              {priceInfo.length !== 0 ? (
                <View>
                  <Text style={styles.pricingText}>
                    Ticket prices from: £{priceInfo[0].min}!
                  </Text>
                  <Text style={styles.pricingText}>
                    To check availibility please click on "Book Tickets!"
                  </Text>
                </View>
              ) : (
                <Text style={styles.pricingText}>
                  To check ticket prices and availibility please click on "Book
                  Tickets!"
                </Text>
              )}
            </View>
            <Text style={styles.moreInfo}>
              Please click on the link below to book tickets, see full event
              information and learn about possible age restrictions.
            </Text>
            <CustomButton
              title={"Book Tickets!"}
              navigation={`${currentEvent.url}`}
            />
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: wp("60%"),
    height: hp("20%"),
    resizeMode: "contain",
    alignSelf: "center",
  },
  main: {
    marginTop: hp("2%"),
    justifyContent: "center",
    alignSelf: "center",
  },
  bck: {
    flex: 1,
    resizeMode: "cover",
  },
  name: {
    margin: wp("4%"),
    fontSize: hp("4%"),
    textAlign: "center",
    fontFamily: "BebasNeue-Regular",
    color: "#41393E",
  },
  header: {
    fontSize: hp("2.8%"),
    textAlign: "center",
    fontFamily: "BalooChettan2-SemiBold",
    color: "#FFCB47",
  },
  date_venue: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    backgroundColor: "#211A1E",
    marginBottom: wp("2%"),
  },
  subWrap: {
    alignItems: "flex-start",
    width: wp("48%"),
  },
  text: {
    fontSize: hp("2%"),
    fontFamily: "BalooChettan2-SemiBold",
    color: "#F6F7EB",
  },
  pricing: {
    backgroundColor: "#211A1E",
    paddingVertical: hp("2%"),
  },
  pricingText: {
    textAlign: "center",
    color: "#F6F7EB",
    fontSize: hp("2%"),
    fontFamily: "BalooChettan2-SemiBold",
  },
  moreInfo: {
    paddingVertical: hp("2%"),
    marginHorizontal: wp("10%"),
    textAlign: "center",
    fontSize: hp("2.2%"),
    fontFamily: "BalooChettan2-SemiBold",
  },
  page: {
    marginTop: hp("10%"),
  },
});

export default EventScreen;
