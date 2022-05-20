export const STARTING_RIDE = "STARTING_RIDE";
export const FINISHED_RIDE = "FINISHED_RIDE";

export const startingRide = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://kilit-96ecd-default-rtdb.firebaseio.com/.json",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({M1:true})
      }
    );

    dispatch({
      type: STARTING_RIDE,
      value: {
        bikeId: "C132",
        price: 0.25,
        startingDate: new Date(),
      },
    });
  };
};

export const finishedRide = (bikeId) => {
  console.log("finishedRide Action");
  return {
    type: FINISHED_RIDE,
    value: {
      bikeId:"C132",
      StationItem:'Y1',
    },
  };
};
