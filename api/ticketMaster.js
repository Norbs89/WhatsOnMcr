import axios from "axios";

export const ticketMaster = axios.create({
  baseURL: "https://app.ticketmaster.com",
});

export const regPath =
  "/discovery/v2/events/?countryCode=GB&size=100&sort=date,asc&city=manchester&classificationName=";

export const KEY = "apikey=ANpZoxilErqqg5GAxqFRVsV3wwWvjAGn";

export const eventPath = "/discovery/v2/events/";

export const fetchList = async (topic, updateState) => {
  try {
    const response = await ticketMaster.get(`${regPath}${topic}&${KEY}`);
    updateState(response.data._embedded.events);
  } catch (err) {
    console.log(err);
  }
};

export const fetchEvent = async (event, updateState) => {
  try {
    const response = await ticketMaster.get(`${eventPath}${event}?${KEY}`);
    updateState(response.data);
  } catch (err) {
    console.log(err);
  }
};
