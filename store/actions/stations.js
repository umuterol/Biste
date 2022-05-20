import { STATIONS } from "../../data/dummy-data";

export const SET_STATIONS = "SET_STATIONS";

export const fetchStations = () => {
  return async (dispatch) => {
    //api request
    //code ...
    const objStations = {};
    STATIONS.forEach((Station) => {
      objStations[Station.id] = {
        items: Station.items,
        active: Station.active,
        itemsCount: Station.itemsCount,
        bikeCount: Station.bikeCount,
        parkCount: Station.parkCount,
      };
    });
    dispatch({ type: SET_STATIONS, value: objStations });
  };
};