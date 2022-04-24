import { SET_NOTIFICATIONS, MARK_AS_READ } from "../actions/notifications";

const initialState = {
  allNotifications: [],
  unreadCount: 0,
};

export default notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATIONS:
      return {
        ...state,
        allNotifications: action.value.allNotifications,
        unreadCount: action.value.unreadCount,
      };
    case MARK_AS_READ:
      const updateNotifications = state.allNotifications.concat();
      for (let i = 0; i < updateNotifications.length; i++) {
        updateNotifications[i].read = true;
      }

      return {
        ...state,
        allNotifications: updateNotifications,
        unreadCount: 0,
      };
    default:
      return state;
  }
};
