import * as Font from "expo-font";

export const fetchFonts = () => {
  return Font.loadAsync({
    "GochiHand-Regular": require("../assets/fonts/GochiHand-Regular.ttf"),
    "PermanentMarker-Regular": require("../assets/fonts/PermanentMarker-Regular.ttf"),
    "BalooChettan2-SemiBold": require("../assets/fonts/BalooChettan2-SemiBold.ttf"),
    "BebasNeue-Regular": require("../assets/fonts/BebasNeue-Regular.ttf"),
  });
};

export const searchEventsByTitle = (title, events) => {
  if (events.length !== 0) {
    let filteredEvents = events.filter((event) =>
      event.name.toLowerCase().includes(title.toLowerCase())
    );
    return filteredEvents;
  }
  return [];
};
