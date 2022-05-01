import { dateToStringDate } from "../helpers/date-helper";

export default class Notification{
  constructor(message, date, read) {
    this.message = message;
    this.date = dateToStringDate(new Date(date));
    this.read = read;
  }
}
