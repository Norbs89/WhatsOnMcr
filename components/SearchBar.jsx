import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange }) => {
  return (
    <View style={styles.searchBar}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        placeholder="search events by title"
        style={styles.inputStyle}
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onTermChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#f0eeee",
    height: 30,
    marginHorizontal: 50,
    borderRadius: 5,
    marginVertical: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 25,
    alignSelf: "center",
    marginHorizontal: 5,
  },
});

export default SearchBar;
