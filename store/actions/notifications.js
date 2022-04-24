import { NOTIFICATIONS } from "../../data/dummy-data";

export const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";
export const MARK_AS_READ = "MARK_AS_READ";

export const fetchNotifications = () => {
  return async (dispatch) => {
    //api request
    //code ...

    dispatch({
      type: SET_NOTIFICATIONS,
      value: {
        allNotifications: NOTIFICATIONS,
        unreadCount: NOTIFICATIONS.filter((not) => !not.read).length,
      },
    });
  };
};

export const markAsRead = () => {
  return async (dispatch) => {
    //api request
    //code ....

    dispatch({ type: MARK_AS_READ });
  };
};
