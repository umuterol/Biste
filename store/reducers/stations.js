import { SET_STATIONS } from "../actions/stations";
import { STARTING_RIDE, FINISHED_RIDE } from "../actions/ride";
import Station from "../../models/Station";
import StationItem from "../../models/StationItem";
import Bike from "../../models/Bike";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STATIONS:
      return action.value;
    case STARTING_RIDE:
      const newItems = [
        new StationItem("Y1"),
        new StationItem("Y2"),
        new StationItem("Y3"),
        new StationItem("Y4"),
        new StationItem("Y5"),
      ];
      const yemekhane = new Station("yemekhane", newItems);

      return {
        ...state,
        yemekhane: {
          items: yemekhane.items,
          active: yemekhane.active,
          itemsCount: yemekhane.itemsCount,
          bikeCount: yemekhane.bikeCount,
          parkCount: yemekhane.parkCount,
        },
      };
    case FINISHED_RIDE:
      const newItemsFinished =  [
        new StationItem("Y1", new Bike("#C132", 0.25)),
        new StationItem("Y2"),
        new StationItem("Y3"),
        new StationItem("Y4"),
        new StationItem("Y5"),
      ]
      const yemekhaneFinished = new Station("yemekhane", newItemsFinished);

      return {
        ...state,
        yemekhane: {
          items: yemekhaneFinished.items,
          active: yemekhaneFinished.active,
          itemsCount: yemekhaneFinished.itemsCount,
          bikeCount: yemekhaneFinished.bikeCount,
          parkCount: yemekhaneFinished.parkCount,
        },
      }
    default:
      return state;
  }
};
