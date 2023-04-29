import moment from "moment"

export const getCurrentTimeStamp = (time) => {
    return moment().format(time);
}