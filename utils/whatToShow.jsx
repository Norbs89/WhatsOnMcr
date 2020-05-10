import React from "react";
import ListItems from "../components/ListItems";
import { searchEventsByTitle } from "./utils";

export const whatToShow = (term, results, navigation) => {
  if (term !== "") {
    return (
      <ListItems
        data={searchEventsByTitle(term, results)}
        navigation={navigation}
      />
    );
  } else {
    return <ListItems data={results} navigation={navigation} />;
  }
};
